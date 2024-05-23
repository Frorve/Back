import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { RepoService } from './repo.service';
import { CreateRepoDto } from './dto/create-repo.dto';
import { UpdateRepoDto } from './dto/update-repo.dto';

@Controller('repo')
export class RepoController {
  constructor(private readonly repoService: RepoService) {}

  @Get()
  findAll() {
    return this.repoService.findAll();
  }

  @Post()
  create(@Body() createRepoDto: CreateRepoDto) {
    return this.repoService.create(createRepoDto)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRepoDto: UpdateRepoDto) {
    return this.repoService.update(id, updateRepoDto)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.repoService.delete(id);
  }

  @Get('autor/:username')
  async getReposByAuthor(@Param('username') username: string) {
    return this.repoService.getReposByAuthor(username);
  }

  @Get('colaborador/:username')
  async getReposByCollaborator(@Param('username') username: string) {
    return this.repoService.getReposByCollaborator(username);
  }

  @Get('time/:id')
  async getTimeByProject(@Param('id') id: string) {
    return this.repoService.getTimeByProject(id);
  }

  @Patch('time/:id')
  async UpdateTimeByProject(@Param('id') id: string, @Body() updateRepoDto: UpdateRepoDto) {
    return this.repoService.UpdateTimeByProject(id, updateRepoDto);
  }

  @Get('colaborador/project/:id')
  async getCollaboratorByRepo(@Param('id') id: string) {
    return this.repoService.getCollaboratorByRepo(id);
  }

  @Patch('colaborador/project/:id')
  async UpdateCollaboratorByRepo(@Param('id') id: string, @Body() updateRepoDto: UpdateRepoDto) {
    return this.repoService.UpdateCollaboratorByRepo(id, updateRepoDto);
  }

  @Get('cliente/project/:id')
  async getClientsByRepo(@Param('id') id: string) {
    return this.repoService.getClientsByRepo(id);
  }

  @Patch('cliente/project/:id')
  async UpdateClientByRepo(@Param('id') id: string, @Body() updateRepoDto: UpdateRepoDto) {
    return this.repoService.UpdateClientByRepo(id, updateRepoDto);
  }

}
