import { Controller, Get, Post, Body, Delete, Param, Req } from '@nestjs/common';
import { RepoService } from './repo.service';
import { Repo } from './repo.entity';
import { Staff } from '../staff/staff.entity';

@Controller('repo')
export class RepoController {
  constructor(private repoService: RepoService) {}

  @Post()
  createRepo(@Req() req, @Body() { nombreProyecto, descripcion, fechaInicio, fechaFinalizacion, colaboradores }: { nombreProyecto: string; descripcion: string, fechaInicio: Date, fechaFinalizacion: Date, colaboradores:string }) {
  const autor: Staff = req.user; // Se asume que req.user es una instancia de Staff
  return this.repoService.createRepo(nombreProyecto, descripcion, fechaInicio, fechaFinalizacion, autor, colaboradores);
}


@Get()
getAllRepo(@Req() req) {
  const autor: Staff = req.user;
  return this.repoService.getRepoByAutor(autor);
}


  // @Get(':id')
  // getRepoById(@Param('id') id: string) {
  //   return this.repoService.getRepoById(+id);
  // }

  @Delete(':id')
  deleteRepo(@Param('id') id: string) {
    return this.repoService.deleteRepo(+id);
  }
}

