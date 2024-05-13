import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions, Like, Repository } from "typeorm";
import { Repo } from "../domain/entities/repo.entity";
import { CreateRepoDto } from "../infrastructure/dto/create-repo.dto";
import { UpdateRepoDto } from "../infrastructure/dto/update-repo.dto";

@Injectable()
export class RepoService {
  constructor(
    @InjectRepository(Repo)
    private readonly repoRepository: Repository<Repo>
  ) {}

  async createRepo(
    createRepoDto: CreateRepoDto,
    username: string,
    archivo?: Express.Multer.File
  ): Promise<Repo> {
    const {
      nombreProyecto,
      descripcion,
      fechaInicio,
      fechaFinalizacion,
      colaboradores,
      cliente,
      nombreArchivo,
    } = createRepoDto;
    const repo = new Repo();
    repo.nombreProyecto = nombreProyecto;
    repo.descripcion = descripcion;
    repo.fechaInicio = fechaInicio;
    repo.fechaFinalizacion = fechaFinalizacion;
    repo.autor = username;
    repo.colaboradores = colaboradores;
    repo.cliente = cliente;
    repo.nombreArchivo = nombreArchivo;

    if (archivo) {
      repo.archivo = archivo.buffer;
    }

    const savedRepo = await this.repoRepository.save(repo);

    return savedRepo;
  }

  async getAllRepoByUsername(username: string): Promise<Repo[]> {
    return this.repoRepository.find({ where: { autor: username } });
  }

  async deleteRepo(id: number): Promise<void> {
    await this.repoRepository.delete(id);
  }

  async getRepoById(id: number): Promise<Repo | undefined> {
    const options: FindOneOptions<Repo> = { where: { id } };
    return this.repoRepository.findOne(options);
  }

  async updateRepo(id: number, updateRepoDto: UpdateRepoDto): Promise<Repo> {
    const {
      nombreProyecto,
      descripcion,
      fechaFinalizacion,
      colaboradores,
      cliente,
      archivo,
      nombreArchivo,
    } = updateRepoDto;
    const buscar: FindOneOptions<Repo> = { where: { id } };
    const repo: Repo | undefined = await this.repoRepository.findOne(buscar);

    if (!repo) {
      throw new Error(`Repo with id ${id} not found`);
    }

    repo.nombreProyecto = nombreProyecto || repo.nombreProyecto;
    repo.descripcion = descripcion || repo.descripcion;
    repo.fechaFinalizacion = fechaFinalizacion || repo.fechaFinalizacion;
    repo.colaboradores = colaboradores || repo.colaboradores;
    repo.cliente = cliente || repo.cliente;
    repo.nombreArchivo = nombreArchivo || repo.nombreArchivo;

    if (archivo) {
      repo.archivo = archivo.buffer;
    }

    return this.repoRepository.save(repo);
  }

  async getReposForCollaborator(username: string): Promise<Repo[]> {
    return this.repoRepository.find({
      where: [{ colaboradores: Like(`%${username}%`) }],
    });
  }

  async getCollaboratorsByProjectId(projectId: number): Promise<string[]> {
    const repo = await this.repoRepository.findOne({
      where: { id: projectId },
    });
    if (!repo) {
      throw new NotFoundException(`Repo with id ${projectId} not found`);
    }

    if (!repo.colaboradores) {
      return [];
    }

    return repo.colaboradores.split(",");
  }

  async getClientsByProjectId(projectId: number): Promise<string[]> {
    const repo = await this.repoRepository.findOne({
      where: { id: projectId },
    });
    if (!repo) {
      throw new NotFoundException(`Repo with id ${projectId} not found`);
    }

    if (!repo.cliente) {
      return [];
    }

    return repo.cliente.split(",");
  }

  async updateTimeEntry(
    id: number,
    UpdateRepoDto: { time: number }
  ): Promise<Repo> {
    const { time } = UpdateRepoDto;
    const buscar: FindOneOptions<Repo> = { where: { id } };
    const repo: Repo | undefined = await this.repoRepository.findOne(buscar);

    if (!repo) {
      throw new NotFoundException(`Repo with id ${id} not found`);
    }

    repo.time = time;

    return this.repoRepository.save(repo);
  }

  async getTimeEntry(id: number): Promise<number> {
    const buscar: FindOneOptions<Repo> = { where: { id } };
    const repo: Repo | undefined = await this.repoRepository.findOne(buscar);

    if (!repo) {
      throw new NotFoundException(`Repo with id ${id} not found`);
    }
    return repo.time;
  }
}
