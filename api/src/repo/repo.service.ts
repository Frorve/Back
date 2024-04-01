import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Repo } from './repo.entity';
import { Staff } from '../staff/staff.entity';

@Injectable()
export class RepoService {
  constructor(
    @InjectRepository(Repo)
    private readonly repoRepository: Repository<Repo>,
  ) {}

  async createRepo(nombreProyecto: string, descripcion: string, fechaInicio: Date, fechaFinalizacion: Date, autor: Staff, colaboradores: string): Promise<Repo> {
    const repo = new Repo();
    repo.nombreProyecto = nombreProyecto;
    repo.descripcion = descripcion;
    repo.fechaInicio = fechaInicio;
    repo.fechaFinalizacion = fechaFinalizacion;
    repo.autor = autor; // Asignamos la instancia de Staff al campo autor
    repo.colaboradores = colaboradores;
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

