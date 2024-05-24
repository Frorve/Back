import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from "@nestjs/common";
import { ApiTags, ApiBody, ApiResponse, ApiParam } from "@nestjs/swagger";
import { RepoService } from "../application/repo.service";
import { CreateRepoDto } from "./dto/create-repo.dto";
import { UpdateRepoDto } from "./dto/update-repo.dto";

@ApiTags("Repo")
@Controller("repo")
export class RepoController {
  constructor(private readonly repoService: RepoService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: "Lista de repositorios obtenida exitosamente",
  })
  findAll() {
    return this.repoService.findAll();
  }

  @Post()
  @ApiBody({
    description: "Datos del repositorio a crear",
    type: CreateRepoDto,
  })
  @ApiResponse({ status: 201, description: "Repositorio creado exitosamente" })
  create(@Body() createRepoDto: CreateRepoDto) {
    return this.repoService.create(createRepoDto);
  }

  @Put(":id")
  @ApiParam({ name: "id", description: "ID del repositorio a actualizar" })
  @ApiBody({
    description: "Datos del repositorio a actualizar",
    type: UpdateRepoDto,
  })
  @ApiResponse({
    status: 200,
    description: "Repositorio actualizado exitosamente",
  })
  update(@Param("id") id: string, @Body() updateRepoDto: UpdateRepoDto) {
    return this.repoService.update(id, updateRepoDto);
  }

  @Delete(":id")
  @ApiParam({ name: "id", description: "ID del repositorio a eliminar" })
  @ApiResponse({
    status: 200,
    description: "Repositorio eliminado exitosamente",
  })
  delete(@Param("id") id: string) {
    return this.repoService.delete(id);
  }

  @Get("autor/:username")
  @ApiParam({ name: "username", description: "Nombre de usuario del autor" })
  @ApiResponse({
    status: 200,
    description: "Lista de repositorios del autor obtenida exitosamente",
  })
  async getReposByAuthor(@Param("username") username: string) {
    return this.repoService.getReposByAuthor(username);
  }

  @Get("colaborador/:username")
  @ApiParam({
    name: "username",
    description: "Nombre de usuario del colaborador",
  })
  @ApiResponse({
    status: 200,
    description: "Lista de repositorios del colaborador obtenida exitosamente",
  })
  async getReposByCollaborator(@Param("username") username: string) {
    return this.repoService.getReposByCollaborator(username);
  }

  @Get("time/:id")
  @ApiParam({ name: "id", description: "ID del proyecto" })
  @ApiResponse({
    status: 200,
    description: "Tiempo del proyecto obtenido exitosamente",
  })
  async getTimeByProject(@Param("id") id: string) {
    return this.repoService.getTimeByProject(id);
  }

  @Patch("time/:id")
  @ApiParam({ name: "id", description: "ID del proyecto" })
  @ApiBody({
    description: "Datos del tiempo del proyecto a actualizar",
    type: UpdateRepoDto,
  })
  @ApiResponse({
    status: 200,
    description: "Tiempo del proyecto actualizado exitosamente",
  })
  async UpdateTimeByProject(
    @Param("id") id: string,
    @Body() updateRepoDto: UpdateRepoDto
  ) {
    return this.repoService.UpdateTimeByProject(id, updateRepoDto);
  }

  @Get("colaborador/project/:id")
  @ApiParam({ name: "id", description: "ID del proyecto" })
  @ApiResponse({
    status: 200,
    description: "Lista de colaboradores del proyecto obtenida exitosamente",
  })
  async getCollaboratorByRepo(@Param("id") id: string) {
    return this.repoService.getCollaboratorByRepo(id);
  }

  @Patch("colaborador/project/:id")
  @ApiParam({ name: "id", description: "ID del proyecto" })
  @ApiBody({
    description: "Datos del colaborador del proyecto a actualizar",
    type: UpdateRepoDto,
  })
  @ApiResponse({
    status: 200,
    description: "Colaborador del proyecto actualizado exitosamente",
  })
  async UpdateCollaboratorByRepo(
    @Param("id") id: string,
    @Body() updateRepoDto: UpdateRepoDto
  ) {
    return this.repoService.UpdateCollaboratorByRepo(id, updateRepoDto);
  }

  @Get("cliente/project/:id")
  @ApiParam({ name: "id", description: "ID del proyecto" })
  @ApiResponse({
    status: 200,
    description: "Lista de clientes del proyecto obtenida exitosamente",
  })
  async getClientsByRepo(@Param("id") id: string) {
    return this.repoService.getClientsByRepo(id);
  }

  @Patch("cliente/project/:id")
  @ApiParam({ name: "id", description: "ID del proyecto" })
  @ApiBody({
    description: "Datos del cliente del proyecto a actualizar",
    type: UpdateRepoDto,
  })
  @ApiResponse({
    status: 200,
    description: "Cliente del proyecto actualizado exitosamente",
  })
  async UpdateClientByRepo(
    @Param("id") id: string,
    @Body() updateRepoDto: UpdateRepoDto
  ) {
    return this.repoService.UpdateClientByRepo(id, updateRepoDto);
  }
}
