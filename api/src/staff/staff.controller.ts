import { Controller, Get, Post, Body, ConflictException, UnauthorizedException, HttpCode, HttpStatus } from '@nestjs/common';
import { StaffService } from './staff.service';
import * as bcrypt from 'bcryptjs';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post()
  async createStaff(@Body() { nombre, cargo, correoElectronico, contraseña }: { nombre: string; cargo: string, correoElectronico: string, contraseña: string}) {
    try {
      const newUser = await this.staffService.createStaff(nombre, cargo, correoElectronico, contraseña);
      return { message: 'Usuario creado exitosamente', user: newUser };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new ConflictException('El nombre de usuario o correo electrónico ya están en uso');
      }
      throw error;
    }
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async loginStaff(@Body() { nombre, contraseña }: { nombre: string; contraseña: string }) {
  const user = await this.staffService.findByUsername(nombre);

  if (!user)  {
  throw new UnauthorizedException('Credenciales incorrectas');
}

if (user) {
  const passwordMatch = await bcrypt.compare(contraseña, user.contraseña);
   if (passwordMatch) {
    return { success: true, user: { nombre: user.nombre, cargo: user.cargo } };
  }
}

  throw new UnauthorizedException('Credenciales incorrectas');
}

  @Get()
  getAllStaff() {
    return this.staffService.getAllStaff();
  }
}
