import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

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
  colaboradores: string;

  @Column('bytea', { nullable: true })
  archivo: Buffer;

  @Column({ nullable: true })
  autor: string;
  
}

