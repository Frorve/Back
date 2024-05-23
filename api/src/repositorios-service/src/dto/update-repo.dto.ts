import { IsString, IsOptional, IsDateString, IsNumber } from "class-validator";

export class UpdateRepoDto {
  @IsString()
  @IsOptional()
  nombreProyecto?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsDateString()
  @IsOptional()
  fechaFinalizacion?: Date;

  @IsString()
  @IsOptional()
  colaboradores?: string;

  @IsString()
  @IsOptional()
  cliente?: string;

  @IsNumber()
  @IsOptional()
  time: number

  @IsString()
  @IsOptional()
  nombreArchivo?: string;

  // @IsOptional()
  // archivo?: Express.Multer.File;
}
