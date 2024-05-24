import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsDateString,
  IsNumber,
} from "class-validator";
import { UUID } from "crypto";

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

  @IsOptional()
  archivo: UUID;

  @IsString()
  @IsOptional()
  nombreArchivo?: string;

  @IsNumber()
  @IsOptional()
  time: number
}
