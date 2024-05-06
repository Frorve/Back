import { IsString, IsNotEmpty } from "class-validator";

export class LoginStaffDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  contraseña: string;
}