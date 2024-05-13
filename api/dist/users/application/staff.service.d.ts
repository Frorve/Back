import { Repository } from "typeorm";
import { Staff } from "../domain/entities/staff.entity";
export declare class StaffService {
    private readonly staffRepository;
    constructor(staffRepository: Repository<Staff>);
    getAllStaff(): Promise<Staff[]>;
    searchStaff(query: string): Promise<Staff[]>;
    findByUsername(username: string): Promise<Staff>;
    getStaffWithReposById(id: number): Promise<Staff | undefined>;
    getStaffWithReposByName(name: string): Promise<Staff | undefined>;
}
