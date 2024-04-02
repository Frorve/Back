import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Repo } from './repo.entity';
import { Staff } from '../staff/staff.entity';
import { Multer } from "multer"

@Injectable()
export class RepoService {
  constructor(
    @InjectRepository(Repo)
    private readonly repoRepository: Repository<Repo>,
  ) {}

  async createRepo(nombreProyecto: string, descripcion: string, fechaInicio: Date, fechaFinalizacion: Date, autor: Staff, colaboradores: string, archivo: Express.Multer.File): Promise<Repo> {
    const repo = new Repo();
    repo.nombreProyecto = nombreProyecto;
    repo.descripcion = descripcion;
    repo.fechaInicio = fechaInicio;
    repo.fechaFinalizacion = fechaFinalizacion;
    repo.autor = autor;
    repo.colaboradores = colaboradores;
    repo.archivo = archivo.buffer; // Almacena el archivo como un buffer en la base de datos
    return this.repoRepository.save(repo);
  }

  async getRepoByAutor(autor: Staff): Promise<Repo[]> {
    return this.repoRepository.find({ where: { autor } });
  }
  
  async getAllRepo(): Promise<Repo[]> {
    return this.repoRepository.find();
  }
  
  async deleteRepo(id: number): Promise<void> {
    await this.repoRepository.delete(id);
  }

}

