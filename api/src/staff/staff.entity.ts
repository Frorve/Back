import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@Entity()
@ApiTags('Staff')
export class Staff {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'Identificador único del personal' })
  id: number;

  @Column()
  @ApiProperty({ description: 'Nombre del personal' })
  nombre: string;

  @Column()
  @ApiProperty({ description: 'Cargo del personal' })
  cargo: string;

  @Column()
  @ApiProperty({ description: 'Correo electrónico del personal' })
  correoElectronico: string;

  @Column()
  @ApiProperty({ description: 'Contraseña del personal' })
  contraseña: string;
  
}


