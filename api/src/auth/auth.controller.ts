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

  @Post('register')
  async register(@Body() { nombre, cargo, correoElectronico, contraseña }: { nombre: string; cargo:string; correoElectronico:string; contraseña: string }) {
    try {
      // Aquí deberías tener la lógica para registrar al usuario en tu servicio de autenticación
      // Puedes llamar a un método en authService para hacer esto.
      const newUser = await this.authService.registerUser(nombre, contraseña, cargo, correoElectronico);
      return { message:'Usuario creado exitosamente', success: true, user: newUser };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new ConflictException('El nombre de usuario o correo electrónico ya están en uso');
      }
      throw error; // Si es otro tipo de error, rechaza la solicitud con el error original
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


