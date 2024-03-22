import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  @Column()
  autor: string;

  @Column()
  colaboradores: string;
}

