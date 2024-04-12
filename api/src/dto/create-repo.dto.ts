import { IsString, IsOptional, IsNotEmpty, IsDate } from "class-validator";

export class CreateRepoDto {
  @IsString()
  @IsNotEmpty()
  nombreProyecto: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsDate()
  fechaInicio: Date;

  @IsDate()
  fechaFinalizacion: Date;

  @IsString()
  @IsOptional()
  autor?: string;

  @IsString()
  @IsOptional()
  colaboradores?: string;

  archivo?: Express.Multer.File;
}
