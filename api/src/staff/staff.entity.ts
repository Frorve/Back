import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Repo } from '../repo/repo.entity';

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  cargo: string;

  @Column()
  correoElectronico: string;

  @Column()
  contraseña: string;

}

