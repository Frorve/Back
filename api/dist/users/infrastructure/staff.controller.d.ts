import { StaffService } from "../application/staff.service";
import { Staff } from "../domain/entities/staff.entity";
export declare class StaffController {
    private readonly staffService;
    constructor(staffService: StaffService);
    searchStaff(query: string): Promise<Staff[]>;
    getAllStaff(): Promise<Staff[]>;
    getByUsername(username: string): Promise<Staff>;
}
