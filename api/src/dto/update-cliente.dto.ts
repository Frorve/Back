import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail, IsPhoneNumber, IsUrl, IsOptional } from "class-validator";

export class UpdateClienteDto {
  @ApiProperty({ description: "Nombre del cliente" })
  @IsOptional()
  nombre?: string;

  @ApiProperty({ description: "Correo electrónico del cliente" })
  @IsEmail()
  @IsOptional()
  correoElectronico?: string;

  @ApiProperty({ description: "Teléfono del cliente" })
  @IsPhoneNumber("ES")
  @IsOptional()
  telefono?: number;

  @ApiProperty({ description: "Página web del cliente" })
  @IsUrl()
  @IsOptional()
  web?: string;
}
