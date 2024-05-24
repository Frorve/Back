import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags, ApiBody, ApiResponse } from "@nestjs/swagger";
import { StaffService } from "../application/staff.service";
import { CreateStaffDto } from "./dto/create-staff.dto";

@ApiTags("Staff")
@Controller("staff")
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: "Lista de personal obtenida exitosamente",
  })
  findAll() {
    return this.staffService.findAll();
  }

  @Post()
  @ApiBody({ description: "Datos del personal a crear", type: CreateStaffDto })
  @ApiResponse({ status: 201, description: "Personal creado exitosamente" })
  create(@Body() createStaffDto: CreateStaffDto) {
    return this.staffService.create(createStaffDto);
  }

  @Get("/name")
  @ApiResponse({
    status: 200,
    description: "Lista de personal filtrada por nombre obtenida exitosamente",
  })
  findAllByName() {
    return this.staffService.findAllByName();
  }
}
