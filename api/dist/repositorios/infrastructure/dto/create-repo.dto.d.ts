export declare class CreateRepoDto {
    nombreProyecto: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFinalizacion: Date;
    autor?: string;
    colaboradores?: string;
    cliente?: string;
    archivo?: Express.Multer.File;
    nombreArchivo?: string;
    time: number;
}
