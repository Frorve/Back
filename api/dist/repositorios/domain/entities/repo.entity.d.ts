/// <reference types="node" />
import { Staff } from "../../../users/domain/entities/staff.entity";
export declare class Repo {
    id: number;
    nombreProyecto: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFinalizacion: Date;
    colaboradores: string;
    archivo: Buffer;
    autor: string;
    nombreArchivo: string;
    cliente: string;
    time: number;
    staff: Staff;
}
