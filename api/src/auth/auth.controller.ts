import { Controller, Post, Body, UnauthorizedException, ConflictException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() { nombre, contraseña }: { nombre: string; contraseña: string }) {
    try {
      const token = await this.authService.login(nombre, contraseña);
      return { success: true, token };
    } catch (error) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }
  }
  
  @Post('verify-token')
  async verifyToken(@Body() { token }: { token: string }) {
    try {
      const decoded = await this.authService.verifyToken(token);
      return { success: true, user: decoded };
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}


