import { CreateStaffDto } from '../infrastructure/dto/create-staff.dto';
export declare class StaffService {
    private readonly baseUrl;
    private getAuthHeader;
    findAll(): Promise<any>;
    create(createStaffDto: CreateStaffDto): Promise<any>;
    findAllByName(): Promise<any>;
}