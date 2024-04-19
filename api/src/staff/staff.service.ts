import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Staff } from "./staff.entity";
import * as bcrypt from "bcryptjs";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiConflictResponse,
  ApiBody,
} from "@nestjs/swagger";
import { CreateStaffDto } from "src/dto/create-staff.dto";


@Injectable()
@ApiTags("Staff")
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>
  ) {}

  @ApiOperation({ summary: "Obtener todos los usuarios" })
  @ApiResponse({ status: 200, description: "Lista de usuarios", type: [Staff] })
  async getAllStaff(): Promise<Staff[]> {
    return this.staffRepository.find();
  }

  @ApiOperation({ summary: "Buscar usuarios por nombre o correo electrónico" })
  @ApiResponse({
    status: 200,
    description: "Usuarios encontrados",
    type: [Staff],
  })
  async searchStaff(query: string): Promise<Staff[]> {
    return this.staffRepository
      .createQueryBuilder("staff")
      .where(
        "staff.nombre LIKE :query OR staff.correoElectronico LIKE :query",
        { query: `%${query}%` }
      )
      .getMany();
  }

  @ApiOperation({ summary: "Buscar un usuario por nombre de usuario" })
  @ApiResponse({ status: 200, description: "Usuario encontrado", type: Staff })
  async findByUsername(nombre: string): Promise<Staff> {
    return this.staffRepository.findOne({ where: { nombre } });
  }

  @ApiOperation({ summary: "Obtener todos los usuarios" })
  @ApiResponse({ status: 200, description: "Lista de usuarios", type: [Staff] })
  async getOneStaff(currentUser: Staff): Promise<Staff[]> {
    return await this.staffRepository.find({
      where: { id: currentUser.id },
      relations: ["repos"],
    });
  }  

}
