import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Repo } from './repo.entity';

@Injectable()
export class RepoService {
  constructor(
    @InjectRepository(Repo)
    private readonly repoRepository: Repository<Repo>,
  ) {}

  async createRepo(nombreProyecto: string, descripcion: string, fechaInicio : Date, fechaFinalizacion: Date, autor: string, colaboradores: string): Promise<Repo> {
    const repo = this.repoRepository.create({ nombreProyecto, descripcion, fechaInicio, fechaFinalizacion, autor, colaboradores});
    return this.repoRepository.save(repo);
  }

  async getAllRepo(): Promise<Repo[]> {
    return this.repoRepository.find();
  }
  
  async deleteRepo(id: number): Promise<void> {
    await this.repoRepository.delete(id);
  }

}

