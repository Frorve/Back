import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ApiProperty, ApiTags } from "@nestjs/swagger";

@Entity()
@ApiTags("Cliente")
export class Cliente {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: "Identificador único del cliente" })
  id: number;

  @Column()
  @ApiProperty({ description: "Nombre del cliente" })
  nombre: string;

  @Column()
  @ApiProperty({ description: "CIF del personal" })
  cif: string;

  @Column()
  @ApiProperty({ description: "Correo electrónico del cliente" })
  correoElectronico: string;

  @Column()
  @ApiProperty({ description: "telefono del cliente" })
  telefono: number;

  @Column({ nullable: true })
  @ApiProperty({ description: "Página web del cliente" })
  web: string;

}