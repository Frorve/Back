import {
  Controller,
  Get,
  Post,
  Body,
  ConflictException,
  UnauthorizedException,
  HttpCode,
  HttpStatus,
  Query,
} from "@nestjs/common";
import { StaffService } from "./staff.service";
import * as bcrypt from "bcryptjs";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiQuery,
} from "@nestjs/swagger";
import { Staff } from "./staff.entity";
import { CreateStaffDto } from "../dto/create-staff.dto";

@Controller("staff")
@ApiTags("Staff")
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post()
  @ApiOperation({ summary: "Crear nuevo personal" })
  @ApiResponse({ status: 201, description: "Personal creado exitosamente" })
  @ApiResponse({
    status: 409,
    description: "El nombre de usuario o correo electrónico ya están en uso",
  })
  async createStaff(@Body() createStaffDto: CreateStaffDto) {
    try {
      const newUser = await this.staffService.createStaff(createStaffDto);
      return { message: "Usuario creado exitosamente", user: newUser };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new ConflictException(
          "El nombre de usuario o correo electrónico ya están en uso"
        );
      }
      throw error;
    }
  }

  @HttpCode(HttpStatus.OK)
  @Post("login")
  @ApiOperation({ summary: "Iniciar sesión del personal" })
  @ApiResponse({ status: 200, description: "Inicio de sesión exitoso" })
  @ApiResponse({ status: 401, description: "Credenciales incorrectas" })
  async loginStaff(
    @Body() { nombre, contraseña }: { nombre: string; contraseña: string }
  ) {
    const user = await this.staffService.findByUsername(nombre);

    if (!user) {
      throw new UnauthorizedException("Credenciales incorrectas");
    }

    const passwordMatch = await bcrypt.compare(contraseña, user.contraseña);
    if (passwordMatch) {
      return {
        success: true,
        user: { nombre: user.nombre, cargo: user.cargo },
      };
    }

    throw new UnauthorizedException("Credenciales incorrectas");
  }

  @Get("search")
  @ApiOperation({ summary: "Buscar personal por nombre o correo electrónico" })
  @ApiQuery({ name: "query", description: "Cadena de búsqueda" })
  @ApiResponse({
    status: 200,
    description: "Personal encontrado",
    type: [Staff],
  })
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
}
