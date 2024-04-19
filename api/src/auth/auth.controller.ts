import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  ConflictException,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateStaffDto } from "../dto/create-staff.dto";
import { LoginStaffDto } from "../dto/login-staff.dto";
import * as bcrypt from "bcryptjs";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  @ApiOperation({ summary: "Iniciar sesión del personal" })
  @ApiResponse({ status: 200, description: "Inicio de sesión exitoso" })
  @ApiResponse({ status: 401, description: "Credenciales incorrectas" })
  async login(@Body() loginStaffDto: LoginStaffDto) {
    const token = await this.authService.login(loginStaffDto);

    if (!token) {
      throw new UnauthorizedException("Credenciales incorrectas");
    }

    return {
      success: true,
      token: token,
    };
  }
  
  @Post("register")
  @ApiOperation({ summary: "Crear nuevo personal" })
  @ApiResponse({ status: 201, description: "Personal creado exitosamente" })
  @ApiResponse({
    status: 409,
    description: "El nombre de usuario o correo electrónico ya están en uso",
  })
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
