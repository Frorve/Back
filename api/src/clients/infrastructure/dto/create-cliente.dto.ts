import { IsNotEmpty, IsEmail, IsPhoneNumber, IsUrl, IsOptional } from "class-validator";

export class CreateClienteDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  cif: string;

  @IsEmail()
  @IsNotEmpty()
  correoElectronico: string;

  @IsNotEmpty()
  telefono: number;

  @IsUrl()
  @IsOptional()
  web?: string;
}
