import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Req,
  UseInterceptors,
  UploadedFile,
  Res,
  Put,
  UseGuards,
} from "@nestjs/common";
import { RepoService } from "./repo.service";
import { Repo } from "./repo.entity";
import { Staff } from "../staff/staff.entity";
import { FileInterceptor } from "@nestjs/platform-express";
import { Multer } from "multer";
import { Response } from "express";
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from "@nestjs/swagger";
import { CreateRepoDto } from "../dto/create-repo.dto";
import { UpdateRepoDto } from "../dto/update-repo.dto";

@Controller("repo")
@ApiTags("Repo")
export class RepoController {
  constructor(private repoService: RepoService) {}

  @Post()
  @ApiOperation({ summary: "Crear un nuevo repositorio" })
  @ApiResponse({ status: 201, description: "Repositorio creado exitosamente" })
  @ApiBody({ type: Repo })
  @UseInterceptors(FileInterceptor("archivo"))
  createRepo(
    @Body() createRepoDto: CreateRepoDto,
    @UploadedFile() archivo: Express.Multer.File
  ) {
    return this.repoService.createRepo(createRepoDto, archivo);
  }

  @Get(":id")
  @ApiOperation({ summary: "Descargar archivo de un repositorio por ID" })
  async downloadFile(@Param("id") id: string, @Res() res): Promise<any> {
    const repo = await this.repoService.getRepoById(+id);
    res.send(repo.archivo);
  }

  @Get()
  @ApiOperation({ summary: "Obtener todos los repositorios" })
  @ApiResponse({
    status: 200,
    description: "Repositorios encontrados",
    type: [Repo],
  })
  async getAllRepo() {
    return this.repoService.getAllRepo();
  }

  @Get("search/:id")
  @ApiOperation({ summary: "Obtener un repositorio por ID" })
  @ApiResponse({
    status: 200,
    description: "Repositorio encontrado",
    type: Repo,
  })
  @ApiResponse({ status: 404, description: "Repositorio no encontrado" })
  getRepoById(@Param("id") id: number) {
    return this.repoService.getRepoById(id);
  }

  @Put(":id")
  @ApiOperation({ summary: "Actualizar un repositorio por ID" })
  @ApiResponse({
    status: 200,
    description: "Repositorio actualizado exitosamente",
    type: Repo,
  })
  @ApiResponse({ status: 404, description: "Repositorio no encontrado" })
  @ApiBody({ type: Repo })
  @UseInterceptors(FileInterceptor("archivo"))
  async updateRepo(
    @Param("id") id: string,
    @UploadedFile() archivo: Express.Multer.File,
    @Body() updateRepoDto: UpdateRepoDto
  ) {
    updateRepoDto.archivo = archivo;
    return this.repoService.updateRepo(+id, updateRepoDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Eliminar un repositorio por ID" })
  @ApiResponse({
    status: 200,
    description: "Repositorio eliminado exitosamente",
  })
  deleteRepo(@Param("id") id: string) {
    return this.repoService.deleteRepo(+id);
  }

  // @Post(":repoId/assign/:userId")
  // async assignRepoToUser(
  //   @Param("repoId") repoId: number,
  //   @Param("userId") userId: number
  // ) {
  //   await this.repoService.assignRepoToUser(repoId, userId);
  //   return { message: "Repositorio asignado al usuario exitosamente" };
  // }

}
