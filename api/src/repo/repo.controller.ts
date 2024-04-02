import { Controller, Get, Post, Body, Delete, Param, Req, UseInterceptors, UploadedFile } from '@nestjs/common';
import { RepoService } from './repo.service';
import { Repo } from './repo.entity';
import { Staff } from '../staff/staff.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from "multer"
import { Response } from 'express';

@Controller('repo')
export class RepoController {
  constructor(private repoService: RepoService) {}

  @Post()
  @UseInterceptors(FileInterceptor('archivo'))
  createRepo(@Req() req, @Body() { nombreProyecto, descripcion, fechaInicio, fechaFinalizacion, colaboradores }: { nombreProyecto: string; descripcion: string, fechaInicio: Date, fechaFinalizacion: Date, colaboradores:string }, @UploadedFile() archivo: Express.Multer.File) {
    const autor: Staff = req.user;
    return this.repoService.createRepo(nombreProyecto, descripcion, fechaInicio, fechaFinalizacion, autor, colaboradores, archivo);
  }


@Get()
getAllRepo(@Req() req) {
  const autor: Staff = req.user;
  return this.repoService.getRepoByAutor(autor);
}

  @Delete(':id')
  deleteRepo(@Param('id') id: string) {
    return this.repoService.deleteRepo(+id);
  }
}

