import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Staff } from "../domain/entities/staff.entity";

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>
  ) {}

  async getAllStaff(): Promise<Staff[]> {
    return this.staffRepository.find();
  }

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

  async getStaffWithReposById(id: number): Promise<Staff | undefined> {
    return this.staffRepository.findOne({
      where: { id },
      relations: ["repos"],
    });
  }

  async getStaffWithReposByName(name: string): Promise<Staff | undefined> {
    return this.staffRepository.findOne({
      where: { nombre: name },
      relations: ["repos"],
    });
  }
}
