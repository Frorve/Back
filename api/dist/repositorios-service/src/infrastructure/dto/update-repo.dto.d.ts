/// <reference types="node" />
import { UUID } from "crypto";
export declare class UpdateRepoDto {
    nombreProyecto?: string;
    descripcion?: string;
    fechaFinalizacion?: Date;
    colaboradores?: string;
    cliente?: string;
    time: number;
    nombreArchivo?: string;
    archivo: UUID;
}
