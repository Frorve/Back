import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsDateString,
  IsNumber,
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

  @IsString()
  @IsOptional()
  cliente?: string;

  // @IsOptional()
  // archivo?: Express.Multer.File;

  @IsString()
  @IsOptional()
  nombreArchivo?: string;

  @IsNumber()
  @IsOptional()
  time: number
}
