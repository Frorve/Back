import { Controller, Get, Param, Query } from "@nestjs/common";
import { StaffService } from "../application/staff.service";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiNotFoundResponse,
} from "@nestjs/swagger";
import { Staff } from "../domain/entities/staff.entity";

@Controller("staff")
@ApiTags("Staff")
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get("search")
  @ApiOperation({ summary: "Buscar personal por nombre o correo electrónico" })
  @ApiQuery({ name: "query", description: "Cadena de búsqueda" })
  @ApiResponse({
    status: 200,
    description: "Personal encontrado",
    type: [Staff],
  })
  @ApiNotFoundResponse({ description: "No se encontró personal" })
  async searchStaff(@Query("query") query: string) {
    try {
      const users = await this.staffService.searchStaff(query);
      return users;
    } catch (error) {
      console.error("Error al buscar usuarios:", error);
      throw new Error("Error al buscar usuarios");
    }
  }

  @Get()
  @ApiOperation({ summary: "Obtener todo el personal" })
  @ApiResponse({
    status: 200,
    description: "Personal encontrado",
    type: [Staff],
  })
  getAllStaff() {
    return this.staffService.getAllStaff();
  }

  @Get("username/:username")
  @ApiOperation({ summary: "Obtener personal por nombre de usuario" })
  @ApiResponse({
    status: 200,
    description: "Usuario encontrado",
    type: Staff,
  })
  @ApiNotFoundResponse({ description: "Usuario no encontrado" })
  async getByUsername(@Param("username") username: string): Promise<Staff> {
    try {
      const user = await this.staffService.findByUsername(username);
      return user;
    } catch (error) {
      console.error("Error al buscar usuario por nombre de usuario:", error);
      throw new Error("Error al buscar usuario por nombre de usuario");
    }
  }
}
