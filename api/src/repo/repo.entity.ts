import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Staff } from '../staff/staff.entity'

@Entity()
export class Repo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreProyecto: string;

  @Column('text')
  descripcion: string;

  @Column('date')
  fechaInicio: Date;

  @Column('date')
  fechaFinalizacion: Date;

  @ManyToOne(() => Staff, staff => staff.repos)
  autor: Staff;

  @Column()
  colaboradores: string;

  @Column('bytea', { nullable: true })
  archivo: Buffer;
}

