import { Repository } from "typeorm";
import { StaffRepo } from "../domain/entities/staff-repo.entity";
import { StaffRepoDto } from "../infrastructure/dto/create-repo-staff.dto";
export declare class StaffRepoService {
    private staffRepoRepository;
    constructor(staffRepoRepository: Repository<StaffRepo>);
    create(staffRepoDto: StaffRepoDto): Promise<StaffRepo>;
    findAll(): Promise<StaffRepo[]>;
    findOne(staffId: number, repoId: number): Promise<StaffRepo>;
    findByStaffId(staffId: number): Promise<StaffRepo[]>;
    findByrepoId(repoId: number): Promise<StaffRepo[]>;
    update(staffId: number, repoId: number, staffRepoDto: StaffRepoDto): Promise<StaffRepo>;
    remove(staffId: number, repoId: number): Promise<void>;
    removeByrepoId(repoId: number): Promise<void>;
    findUserById(userId: number): Promise<{
        username: string;
    } | null>;
    findByUsername(username: string): Promise<StaffRepo[]>;
}
