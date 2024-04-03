import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Repo } from './repo.entity';
import { Staff } from '../staff/staff.entity';
import { Multer } from "multer"

@Injectable()
export class RepoService {
  constructor(
    @InjectRepository(Repo)
    private readonly repoRepository: Repository<Repo>,
  ) {}

  async createRepo(nombreProyecto: string, descripcion: string, fechaInicio: Date, fechaFinalizacion: Date, autor: Staff, colaboradores: string, archivo?: Express.Multer.File): Promise<Repo> {
    const repo = new Repo();
    repo.nombreProyecto = nombreProyecto;
    repo.descripcion = descripcion;
    repo.fechaInicio = fechaInicio;
    repo.fechaFinalizacion = fechaFinalizacion;
    repo.autor = autor;
    repo.colaboradores = colaboradores;

    if (archivo) {
      repo.archivo = archivo.buffer;
    }
    
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

  async getRepoById(id: number): Promise<Repo | undefined> {
    const options: FindOneOptions<Repo> = { where: { id } }; // Crear opciones de búsqueda
    return this.repoRepository.findOne(options); // Pasar las opciones a findOne
  }

  async updateRepo(id: number, nombreProyecto: string, descripcion: string, colaboradores: string): Promise<Repo> {
    const buscar: FindOneOptions<Repo> = { where: { id } };
    const repo: Repo | undefined = await this.repoRepository.findOne(buscar);
  
    if (!repo) {
      throw new Error(`Repo with id ${id} not found`);
    }
    
    repo.nombreProyecto = nombreProyecto;
    repo.descripcion = descripcion;
    repo.colaboradores = colaboradores;
    
    return this.repoRepository.save(repo);
  }
  
  

}

