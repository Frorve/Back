import { StaffRepoService } from "../application/staff-repo.service";
import { StaffRepo } from "../domain/entities/staff-repo.entity";
import { StaffRepoDto } from "./dto/create-repo-staff.dto";
export declare class StaffRepoController {
    private readonly staffRepoService;
    constructor(staffRepoService: StaffRepoService);
    create(staffProjectDto: StaffRepoDto): Promise<StaffRepo>;
    findByStaffId(staffId: string): Promise<StaffRepo[]>;
    findByrepoId(repoId: string): Promise<StaffRepo[]>;
    removeByrepoId(repoId: number): Promise<void>;
    findUsersByrepoId(repoId: number): Promise<string[]>;
    findOne(staffId: number, repoId: number): Promise<StaffRepo>;
    findAll(): Promise<StaffRepo[]>;
    update(staffId: number, repoId: number, staffProjectDto: StaffRepoDto): Promise<StaffRepo>;
    remove(staffId: number, repoId: number): Promise<void>;
    findByUsername(username: string): Promise<StaffRepo[]>;
}
