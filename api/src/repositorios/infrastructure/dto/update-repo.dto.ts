import { IsString, IsOptional, IsDateString } from "class-validator";

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

  @IsOptional()
  archivo?: Express.Multer.File;
}
