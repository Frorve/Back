/// <reference types="node" />
import { UUID } from "crypto";
export declare class CreateRepoDto {
    nombreProyecto: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFinalizacion: Date;
    autor?: string;
    colaboradores?: string;
    cliente?: string;
    archivo: UUID;
    nombreArchivo?: string;
    time: number;
}
