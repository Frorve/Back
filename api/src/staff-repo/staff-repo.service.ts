import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { StaffRepo } from "./staff-repo.entity";

@Injectable()
export class StaffRepoService {
  constructor(
    @InjectRepository(StaffRepo)
    private staffRepoRepository: Repository<StaffRepo>
  ) {}

  async getUserRepos(userId: number): Promise<StaffRepo[]> {
    return this.staffRepoRepository.find({
      where: { staff: { id: userId } },
      relations: ["repo"],
    });
  }
}
