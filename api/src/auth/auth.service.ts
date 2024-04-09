import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { StaffService } from '../staff/staff.service';
import * as bcrypt from 'bcryptjs';
import { Staff } from '../staff/staff.entity';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly JWT_SECRET = 'your_secret_key'; // Cambia esto por tu clave secreta

  constructor(private readonly staffService: StaffService) {}

  async registerUser(nombre: string, cargo: string, correoElectronico: string, contraseña: string): Promise<Staff> {
    const existingUser = await this.staffService.findByUsername(nombre);
    if (existingUser) {
      throw new ConflictException('El nombre de usuario o correo electrónico ya están en uso');
    }
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    return this.staffService.createStaff(nombre, cargo, correoElectronico, hashedPassword);
  }

  async login(nombre: string, contraseña: string): Promise<string> {
    const user = await this.staffService.findByUsername(nombre);
    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }
    const passwordMatch = await bcrypt.compare(contraseña, user.contraseña);
    if (!passwordMatch) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }
    const token = jwt.sign({ nombre: user.nombre, cargo: user.cargo }, this.JWT_SECRET, { expiresIn: '300h' });
    return token;
  }

  async verifyToken(token: string): Promise<any> {
    try {
      const decoded = jwt.verify(token, this.JWT_SECRET);
      return decoded;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}

