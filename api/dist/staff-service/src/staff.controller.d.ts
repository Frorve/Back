import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
export declare class StaffController {
    private readonly staffService;
    constructor(staffService: StaffService);
    findAll(): Promise<any>;
    create(createStaffDto: CreateStaffDto): Promise<any>;
    findAllByName(): Promise<any>;
}
