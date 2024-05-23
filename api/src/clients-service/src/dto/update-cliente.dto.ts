import { IsEmail, IsPhoneNumber, IsUrl, IsOptional } from "class-validator";

export class UpdateClienteDto {
  @IsOptional()
  nombre?: string;

  @IsEmail()
  @IsOptional()
  correoElectronico?: string;

  @IsPhoneNumber("ES")
  @IsOptional()
  telefono?: number;

  @IsUrl()
  @IsOptional()
  web?: string;
}
