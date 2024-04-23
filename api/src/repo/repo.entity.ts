import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { Staff } from "src/staff/staff.entity";

@Entity()
@ApiTags("repo")
export class Repo {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: "Identificador único del repositorio" })
  id: number;

  @Column()
  @ApiProperty({ description: "Nombre del proyecto asociado al repositorio" })
  nombreProyecto: string;

  @Column("text")
  @ApiProperty({ description: "Descripción del repositorio" })
  descripcion: string;

  @Column("date")
  @ApiProperty({ description: "Fecha de inicio del proyecto" })
  fechaInicio: Date;

  @Column("date")
  @ApiProperty({ description: "Fecha de finalización del proyecto" })
  fechaFinalizacion: Date;

  @Column({ nullable: true })
  @ApiProperty({ description: "Lista de colaboradores del proyecto" })
  colaboradores: string;

  @Column("bytea", { nullable: true })
  @ApiProperty({
    description: "Archivo asociado al repositorio",
    type: "string",
    format: "binary",
  })
  archivo: Buffer;

  @Column({ nullable: true })
  @ApiProperty({ description: "Nombre del autor del repositorio" })
  autor: string;

  @Column({ nullable: true })
  @ApiProperty({ description: "Nombre del archivo asociado al repositorio" })
  nombreArchivo: string;

  @ManyToOne(() => Staff, staff => staff.repos)
  staff: Staff;

}
