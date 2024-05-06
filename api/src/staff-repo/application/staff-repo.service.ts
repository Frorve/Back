import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { StaffRepo } from "../domain/entities/staff-repo.entity";
import { StaffRepoDto } from "../infrastructure/dto/create-repo-staff.dto"

@Injectable()
export class StaffRepoService {
  constructor(
    @InjectRepository(StaffRepo)
    private staffRepoRepository: Repository<StaffRepo>
  ) {}


  async create(staffRepoDto: StaffRepoDto): Promise<StaffRepo> {
    const staffProject = this.staffRepoRepository.create(staffRepoDto);
    return this.staffRepoRepository.save(staffProject);
  }

  async findAll(): Promise<StaffRepo[]> {
    return this.staffRepoRepository.find();
  }

  async findOne(staffId: number, repoId: number): Promise<StaffRepo> {
    return this.staffRepoRepository.findOne({ where: { staff_id: staffId, repo_id: repoId } });
  }

  async findByStaffId(staffId: number): Promise<StaffRepo[]> {
    return this.staffRepoRepository.find({ where: { staff_id: staffId } });
  }

  async findByrepoId(repoId: number): Promise<StaffRepo[]> {
    return this.staffRepoRepository.find({ where: { repo_id: repoId } });
  }

  async update(staffId: number, repoId: number, staffRepoDto: StaffRepoDto): Promise<StaffRepo> {
    await this.staffRepoRepository.update({ staff_id: staffId, repo_id: repoId }, staffRepoDto);
    return this.findOne(staffId, repoId);
  }

  async remove(staffId: number, repoId: number): Promise<void> {
    await this.staffRepoRepository.delete({ staff_id: staffId, repo_id: repoId });
  }

  async removeByrepoId(repoId: number): Promise<void> {
    await this.staffRepoRepository.delete({ repo_id: repoId });
  }

  async findUserById(userId: number): Promise<{ username: string } | null> {
    const user = await this.staffRepoRepository.query(`SELECT nombre FROM staff_repo WHERE staff_id = $1`, [userId]);
    return user[0] || null;
  }

  async findByUsername(username: string): Promise<StaffRepo[]> {
    return this.staffRepoRepository
      .createQueryBuilder("staff_repo")
      .leftJoinAndSelect("staff_repo.staff", "staff")
      .leftJoinAndSelect("staff_repo.repo", "repo")
      .where("staff.nombre = :username", { username })
      .getMany();
  }

}

