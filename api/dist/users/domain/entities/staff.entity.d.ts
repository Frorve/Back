import { Repo } from "../../../repositorios/domain/entities/repo.entity";
export declare class Staff {
    id: number;
    nombre: string;
    cargo: string;
    correoElectronico: string;
    contraseña: string;
    repos: Repo[];
}
