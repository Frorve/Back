import { Repository } from 'typeorm';
import { Staff } from './staff.entity';
export declare class StaffService {
    private readonly staffRepository;
    constructor(staffRepository: Repository<Staff>);
    createStaff(nombre: string, cargo: string, correoElectronico: string, contraseña: string): Promise<Staff>;
    getAllStaff(): Promise<Staff[]>;
}
