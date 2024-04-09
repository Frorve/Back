import { Controller, Get, Post, Body, Delete, Param, Req, UseInterceptors, UploadedFile, Res, Put, UseGuards } from '@nestjs/common';
import { RepoService } from './repo.service';
import { Repo } from './repo.entity';
import { Staff } from '../staff/staff.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from "multer"
import { Response } from 'express';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@Controller('repo')
@ApiTags('Repo') 
export class RepoController {
  constructor(private repoService: RepoService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo repositorio' })
  @ApiResponse({ status: 201, description: 'Repositorio creado exitosamente' })
  @ApiBody({ type: Repo })
  @UseInterceptors(FileInterceptor('archivo'))
  createRepo(@Body() { nombreProyecto, descripcion, currentUser, fechaInicio, fechaFinalizacion, colaboradores, autor }: { nombreProyecto: string, descripcion: string, currentUser: Staff, fechaInicio: Date, fechaFinalizacion: Date, colaboradores:string, autor: string }, @UploadedFile() archivo: Express.Multer.File) {
    return this.repoService.createRepo(nombreProyecto, descripcion, currentUser, fechaInicio, fechaFinalizacion, autor, colaboradores, archivo);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Descargar archivo de un repositorio por ID' })
  async downloadFile(@Param('id') id: string, @Res() res): Promise<any> {
    const repo = await this.repoService.getRepoById(+id);
    res.send(repo.archivo);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los repositorios' })
  @ApiResponse({ status: 200, description: 'Repositorios encontrados', type: [Repo] })
  async getAllRepo(@Req() req): Promise<Repo[]> {
    const currentUser: Staff = req.user; // Suponiendo que el usuario actual se encuentra en el objeto de solicitud (req)
    return this.repoService.getReposByUser(currentUser);
  }

  @Get('search/:id')
  @ApiOperation({ summary: 'Obtener un repositorio por ID' })
  @ApiResponse({ status: 200, description: 'Repositorio encontrado', type: Repo })
  @ApiResponse({ status: 404, description: 'Repositorio no encontrado' })
  getRepoById(@Param('id') id: number) {
    return this.repoService.getRepoById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un repositorio por ID' })
  @ApiResponse({ status: 200, description: 'Repositorio actualizado exitosamente', type: Repo })
  @ApiResponse({ status: 404, description: 'Repositorio no encontrado' })
  @ApiBody({ type: Repo })
  @UseInterceptors(FileInterceptor('archivo'))
  updateRepo(@Param('id') id: string, @Body() { nombreProyecto, descripcion, colaboradores }: { nombreProyecto: string; descripcion: string, colaboradores:string }, @UploadedFile() archivo: Express.Multer.File) {
    return this.repoService.updateRepo(+id, nombreProyecto, descripcion, colaboradores);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un repositorio por ID' })
  @ApiResponse({ status: 200, description: 'Repositorio eliminado exitosamente' })
  deleteRepo(@Param('id') id: string) {
    return this.repoService.deleteRepo(+id);
  }
}

