import { IsString, IsNotEmpty, IsEmail } from "class-validator";

export class CreateStaffDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  cargo: string;

  @IsEmail()
  @IsNotEmpty()
  correoElectronico: string;

  @IsString()
  @IsNotEmpty()
  contraseña: string;
}
