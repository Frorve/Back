import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Repo } from './repo.entity';
import { Staff } from '../staff/staff.entity';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Injectable()
@ApiTags('Repo')
export class RepoService {
  constructor(
    @InjectRepository(Repo)
    private readonly repoRepository: Repository<Repo>,
  ) {}

  @ApiOperation({ summary: 'Crear un nuevo repositorio' }) 
  @ApiResponse({ status: 201, description: 'Repositorio creado exitosamente' })
  @ApiBody({ type: Repo })
  async createRepo(
    nombreProyecto: string,
    descripcion: string,
    currentUser: Staff,
    fechaInicio: Date,
    fechaFinalizacion: Date,
    autor: string,
    colaboradores: string,
    archivo?: Express.Multer.File,
  ): Promise<Repo> {
    const repo = new Repo();
    repo.nombreProyecto = nombreProyecto;
    repo.descripcion = descripcion;
    repo.createdBy = currentUser;
    repo.fechaInicio = fechaInicio;
    repo.fechaFinalizacion = fechaFinalizacion;
    repo.autor = autor;
    repo.colaboradores = colaboradores;

    if (archivo) {
      repo.archivo = archivo.buffer;
    }

    const savedRepo = await this.repoRepository.save(repo);

    return savedRepo;
  }

  @ApiOperation({ summary: 'Obtener repositorios por autor' })
  @ApiResponse({ status: 200, description: 'Repositorios encontrados', type: [Repo] })
  async getRepoByAutor(autor: string): Promise<Repo[]> {
    return this.repoRepository.find({ where: { autor } });
  }

  @ApiOperation({ summary: 'Obtener todos los repositorios' })
  @ApiResponse({ status: 200, description: 'Repositorios encontrados', type: [Repo] })
  async getAllRepo(): Promise<Repo[]> {
    return this.repoRepository.find();
  }

  @ApiOperation({ summary: 'Eliminar un repositorio por ID' })
  @ApiResponse({ status: 200, description: 'Repositorio eliminado exitosamente' })
  async deleteRepo(id: number): Promise<void> {
    await this.repoRepository.delete(id);
  }

  @ApiOperation({ summary: 'Obtener un repositorio por ID' })
  @ApiResponse({ status: 200, description: 'Repositorio encontrado', type: Repo })
  @ApiResponse({ status: 404, description: 'Repositorio no encontrado' })
  async getRepoById(id: number): Promise<Repo | undefined> {
    const options: FindOneOptions<Repo> = { where: { id } };
    return this.repoRepository.findOne(options);
  }

  @ApiOperation({ summary: 'Actualizar un repositorio por ID' })
  @ApiResponse({ status: 200, description: 'Repositorio actualizado exitosamente', type: Repo })
  @ApiResponse({ status: 404, description: 'Repositorio no encontrado' })
  @ApiBody({ type: Repo })
  async updateRepo(
    id: number,
    nombreProyecto: string,
    descripcion: string,
    colaboradores: string,
  ): Promise<Repo> {
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
  
  @ApiOperation({ summary: 'Obtener cada repositorio que ha creado cada usuario' })
  @ApiResponse({ status: 200, description: 'Lista de usuarios y sus repositorios', type: [Staff] })
  async getReposByUser(user: Staff): Promise<Repo[]> {
    return await this.repoRepository.find({where: { createdBy: user },
    });
  }

}
