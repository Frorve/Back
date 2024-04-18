import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsDateString,
} from "class-validator";

export class CreateRepoDto {
  @IsString()
  @IsNotEmpty()
  nombreProyecto: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsDateString()
  fechaInicio: Date;

  @IsDateString()
  fechaFinalizacion: Date;

  @IsString()
  @IsOptional()
  autor?: string;

  @IsString()
  @IsOptional()
  colaboradores?: string;

  @IsOptional()
  archivo?: Express.Multer.File;

  @IsOptional()
  nombreArchivo?: string;
}
