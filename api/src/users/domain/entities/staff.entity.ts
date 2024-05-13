import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Repo } from "../../../repositorios/domain/entities/repo.entity";

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

  @OneToMany(() => Repo, (repo) => repo.staff)
  repos: Repo[];
}
