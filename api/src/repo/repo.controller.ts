import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  UseInterceptors,
  UploadedFile,
  Res,
  Put,
  NotFoundException,
} from "@nestjs/common";
import { RepoService } from "./repo.service";
import { Repo } from "./repo.entity";
import { FileInterceptor } from "@nestjs/platform-express";
import { Multer } from "multer";
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from "@nestjs/swagger";
import { CreateRepoDto } from "../dto/create-repo.dto";
import { UpdateRepoDto } from "../dto/update-repo.dto";
import { Response } from "express";
import { Readable } from "typeorm/platform/PlatformTools";

@Controller("repo")
@ApiTags("Repo")
export class RepoController {
  constructor(
    private repoService: RepoService,
  ) {}

  @Post(":username")
  @ApiOperation({ summary: "Crear un nuevo repositorio" })
  @ApiResponse({ status: 201, description: "Repositorio creado exitosamente" })
  @ApiBody({ type: Repo })
  @UseInterceptors(FileInterceptor("archivo"))
  createRepo(
    @Body() createRepoDto: CreateRepoDto,
    @UploadedFile() archivo: Express.Multer.File,
    @Param("username") username: string
  ) {
    return this.repoService.createRepo(createRepoDto, username, archivo);
  }

  @Get("download/:id")
  async downloadFile(
    @Param("id") id: number,
    @Res() res: Response
  ): Promise<any> {
    const repo = await this.repoService.getRepoById(id);
    if (!repo || !repo.archivo) {
      throw new NotFoundException(`Repo with id ${id} not found`);
    }

    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${repo.nombreArchivo}`
    );

    const stream = Readable.from(repo.archivo);
    stream.pipe(res);
  }

  @Get(":username")
  @ApiOperation({ summary: "Obtener todos los repositorios" })
  @ApiResponse({
    status: 200,
    description: "Repositorios encontrados",
    type: [Repo],
  })
  async getAllRepo(@Param("username") username: string) {
    return this.repoService.getAllRepoByUsername(username);
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
}
