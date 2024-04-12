import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  ConflictException,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateStaffDto } from "../dto/create-staff.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(
    @Body() { nombre, contraseña }: { nombre: string; contraseña: string }
  ) {
    try {
      const token = await this.authService.login(nombre, contraseña);
      return { success: true, token };
    } catch (error) {
      throw new UnauthorizedException("Credenciales incorrectas");
    }
  }

  @Post("register")
  async register(@Body() createStaffDto: CreateStaffDto) {
    try {
      const newUser = await this.authService.registerUser(createStaffDto);
      return {
        message: "Usuario creado exitosamente",
        success: true,
        user: newUser,
      };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new ConflictException(
          "El nombre de usuario o correo electrónico ya están en uso"
        );
      }
      throw error;
    }
  }

  @Post("verify-token")
  async verifyToken(@Body() { token }: { token: string }) {
    try {
      const decoded = await this.authService.verifyToken(token);
      return { success: true, user: decoded };
    } catch (error) {
      throw new UnauthorizedException("Token inválido");
    }
  }
}
