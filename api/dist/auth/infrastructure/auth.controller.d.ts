import { AuthService } from "../application/auth.service";
import { CreateStaffDto } from "../../commons/domain/dto/create-staff.dto";
import { LoginStaffDto } from "../../commons/domain/dto/login-staff.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginStaffDto: LoginStaffDto): Promise<{
        success: boolean;
        token: string;
    }>;
    register(createStaffDto: CreateStaffDto): Promise<{
        message: string;
        success: boolean;
        user: import("../../users/domain/entities/staff.entity").Staff;
    }>;
    getMain(req: any): Promise<{
        message: string;
    }>;
    verifyToken({ token }: {
        token: string;
    }): Promise<{
        success: boolean;
        user: any;
    }>;
}
