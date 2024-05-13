import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  cif: string;

  @Column()
  correoElectronico: string;

  @Column()
  telefono: number;

  @Column({ nullable: true })
  web: string;

}