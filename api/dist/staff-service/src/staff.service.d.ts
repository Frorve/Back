import { CreateStaffDto } from './dto/create-staff.dto';
export declare class StaffService {
    private readonly baseUrl;
    findAll(): Promise<any>;
    create(createStaffDto: CreateStaffDto): Promise<any>;
    findAllByName(): Promise<any>;
}
