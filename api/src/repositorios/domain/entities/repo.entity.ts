import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { Staff } from "../../../users/domain/entities/staff.entity";

@Entity()
export class Repo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreProyecto: string;

  @Column("text")
  descripcion: string;

  @Column("date")
  fechaInicio: Date;

  @Column("date")
  fechaFinalizacion: Date;

  @Column({ nullable: true })
  colaboradores: string;

  @Column("bytea", { nullable: true })
  archivo: Buffer;

  @Column({ nullable: true })
  autor: string;

  @Column({ nullable: true })
  nombreArchivo: string;

  @Column({ nullable: true })
  cliente: string;

  @Column({ nullable: true })
  time: number;

  @ManyToOne(() => Staff, staff => staff.repos)
  staff: Staff;

}
