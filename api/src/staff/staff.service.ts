import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from './staff.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>,
  ) {}

  async createStaff(nombre: string, cargo: string, correoElectronico: string, contraseña: string): Promise<Staff> {
    const existingUser = await this.staffRepository.findOne({ where: [{ nombre }, { correoElectronico }] });

    if (existingUser) {
      throw new ConflictException('El nombre de usuario o correo electrónico ya están en uso');
    }

    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const staff = this.staffRepository.create({ nombre, cargo, correoElectronico, contraseña: hashedPassword });
    return this.staffRepository.save(staff);
  }

  async getAllStaff(): Promise<Staff[]> {
    return this.staffRepository.find();
  }

  async searchStaff(query: string): Promise<Staff[]> {
    // Buscar usuarios que coincidan con el nombre o el correo electrónico
    return this.staffRepository.createQueryBuilder('staff')
      .where('staff.nombre LIKE :query OR staff.correoElectronico LIKE :query', { query: `%${query}%` })
      .getMany();
  }

  async findByUsername(nombre: string): Promise<Staff> {
    return this.staffRepository.findOne({ where: { nombre } });
  }

}


