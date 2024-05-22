import { Controller, Get } from '@nestjs/common';
import { RepoService } from './repo.service';

@Controller('repo')
export class RepoController {
  constructor(private readonly repoService: RepoService) {}

  @Get()
  findAll() {
    return this.repoService.findAll();
  }

}
