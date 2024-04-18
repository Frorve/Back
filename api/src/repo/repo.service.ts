import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions, Repository } from "typeorm";
import { Repo } from "./repo.entity";
import { Staff } from "../staff/staff.entity";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateRepoDto } from "../dto/create-repo.dto";
import { UpdateRepoDto } from "../dto/update-repo.dto";
import { arch } from "os";

@Injectable()
@ApiTags("Repo")
export class RepoService {
  constructor(
    @InjectRepository(Repo)
    private readonly repoRepository: Repository<Repo>
  ) {}

  @ApiOperation({ summary: "Crear un nuevo repositorio" })
  @ApiResponse({ status: 201, description: "Repositorio creado exitosamente" })
  @ApiBody({ type: Repo })
  async createRepo(
    createRepoDto: CreateRepoDto,
    archivo?: Express.Multer.File
  ): Promise<Repo> {
    const {
      nombreProyecto,
      descripcion,
      fechaInicio,
      fechaFinalizacion,
      autor,
      colaboradores,
      nombreArchivo,
    } = createRepoDto;
    const repo = new Repo();
    repo.nombreProyecto = nombreProyecto;
    repo.descripcion = descripcion;
    repo.fechaInicio = fechaInicio;
    repo.fechaFinalizacion = fechaFinalizacion;
    repo.autor = autor;
    repo.colaboradores = colaboradores;
    repo.nombreArchivo = nombreArchivo;

    if (archivo) {
      repo.archivo = archivo.buffer;
    }

    const savedRepo = await this.repoRepository.save(repo);

    return savedRepo;
  }

  @ApiOperation({ summary: "Obtener todos los repositorios" })
  @ApiResponse({
    status: 200,
    description: "Repositorios encontrados",
    type: [Repo],
  })
  async getAllRepo(): Promise<Repo[]> {
    return this.repoRepository.find();
  }

  @ApiOperation({ summary: "Eliminar un repositorio por ID" })
  @ApiResponse({
    status: 200,
    description: "Repositorio eliminado exitosamente",
  })
  async deleteRepo(id: number): Promise<void> {
    await this.repoRepository.delete(id);
  }

  @ApiOperation({ summary: "Obtener un repositorio por ID" })
  @ApiResponse({
    status: 200,
    description: "Repositorio encontrado",
    type: Repo,
  })
  @ApiResponse({ status: 404, description: "Repositorio no encontrado" })
  async getRepoById(id: number): Promise<Repo | undefined> {
    const options: FindOneOptions<Repo> = { where: { id } };
    return this.repoRepository.findOne(options);
  }

  @ApiOperation({ summary: "Actualizar un repositorio por ID" })
  @ApiResponse({
    status: 200,
    description: "Repositorio actualizado exitosamente",
    type: Repo,
  })
  @ApiResponse({ status: 404, description: "Repositorio no encontrado" })
  @ApiBody({ type: Repo })
  async updateRepo(id: number, updateRepoDto: UpdateRepoDto): Promise<Repo> {
    const { nombreProyecto, descripcion, fechaFinalizacion, archivo } = updateRepoDto;
    const buscar: FindOneOptions<Repo> = { where: { id } };
    const repo: Repo | undefined = await this.repoRepository.findOne(buscar);

    if (!repo) {
      throw new Error(`Repo with id ${id} not found`);
    }

    repo.nombreProyecto = nombreProyecto || repo.nombreProyecto;
    repo.descripcion = descripcion || repo.descripcion;
    repo.fechaFinalizacion = fechaFinalizacion || repo.fechaFinalizacion;

    if(archivo) {
      repo.archivo = archivo.buffer;
    }

    return this.repoRepository.save(repo);
  }

  // async assignRepoToUser(repoId: number, userId: number): Promise<void> {
  //   const repo = await this.repoRepository.findOne({
  //     where: { id: repoId },
  //     relations: ["repo"],
  //   });
  //   if (!repo) {
  //     throw new Error(`Repo with id ${repoId} not found`);
  //   }
  //   repo.authorId = userId; // Suponiendo que tienes una columna authorId en tu entidad de Repo para almacenar el ID del autor
  //   await this.repoRepository.save(repo);
  // }

}
