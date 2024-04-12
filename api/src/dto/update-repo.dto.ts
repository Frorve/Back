import { IsString, IsOptional } from "class-validator";

export class UpdateRepoDto {
  @IsString()
  @IsOptional()
  nombreProyecto?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  colaboradores?: string;
}
