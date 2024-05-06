import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail, IsPhoneNumber, IsUrl, IsOptional } from "class-validator";

export class CreateClienteDto {
  @ApiProperty({ description: "Nombre del cliente" })
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ description: "CIF del personal" })
  @IsNotEmpty()
  cif: string;

  @ApiProperty({ description: "Correo electrónico del cliente" })
  @IsEmail()
  @IsNotEmpty()
  correoElectronico: string;

  @ApiProperty({ description: "Teléfono del cliente" })
  @IsNotEmpty()
  telefono: number;

  @ApiProperty({ description: "Página web del cliente" })
  @IsUrl()
  @IsOptional()
  web?: string;
}
