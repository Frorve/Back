import { Staff } from "../../users/domain/entities/staff.entity";
import { CreateStaffDto } from "../../commons/domain/dto/create-staff.dto";
import { LoginStaffDto } from "../../commons/domain/dto/login-staff.dto";
import { Repository } from "typeorm";
export declare class AuthService {
    private readonly staffRepository;
    private readonly JWT_SECRET;
    constructor(staffRepository: Repository<Staff>);
    registerUser(createStaffDto: CreateStaffDto): Promise<Staff>;
    login(loginStaffDto: LoginStaffDto): Promise<string | null>;
    verifyToken(token: string): Promise<any>;
}
