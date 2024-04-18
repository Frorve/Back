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

  @IsOptional()
  archivo?: Express.Multer.File;
}
