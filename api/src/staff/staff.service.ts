import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Staff } from "./staff.entity";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
} from "@nestjs/swagger";

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

  async findByUsername(username: string): Promise<Staff> {
    return this.staffRepository.findOne({ where: { nombre: username } });
  }

  @ApiOperation({ summary: "Obtener todos los usuarios" })
  @ApiResponse({ status: 200, description: "Lista de usuarios", type: [Staff] })
  async getOneStaff(currentUser: Staff): Promise<Staff[]> {
    return await this.staffRepository.find({
      where: { id: currentUser.id },
      relations: ["repos"],
    });
  }  

  async getStaffWithReposById(id: number): Promise<Staff | undefined> {
    return this.staffRepository.findOne({ where: { id }, relations: ["repos"] });
  }

  async getStaffWithReposByName(name: string): Promise<Staff | undefined> {
    return this.staffRepository.findOne({ where: { nombre: name }, relations: ["repos"] });
}

}
