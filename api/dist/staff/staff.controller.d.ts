import { StaffService } from './staff.service';
export declare class StaffController {
    private readonly staffService;
    constructor(staffService: StaffService);
    createStaff({ nombre, cargo, correoElectronico, contraseña }: {
        nombre: string;
        cargo: string;
        correoElectronico: string;
        contraseña: string;
    }): Promise<import("./staff.entity").Staff>;
    getAllStaff(): Promise<import("./staff.entity").Staff[]>;
}
