import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { RepoService } from './repo.service';
import { Repo } from './repo.entity';

@Controller('repo')
export class RepoController {
  constructor(private repoService: RepoService) {}

  @Post()
  createRepo(@Body() { nombreProyecto, descripcion, fechaInicio, fechaFinalizacion, autor, colaboradores }: { nombreProyecto: string; descripcion: string, fechaInicio: Date, fechaFinalizacion: Date, autor:string, colaboradores:string }) {
    return this.repoService.createRepo(nombreProyecto, descripcion, fechaInicio, fechaFinalizacion, autor, colaboradores);
  }

  @Get()
  getAllRepo() {
    return this.repoService.getAllRepo();
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

