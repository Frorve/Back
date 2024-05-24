import { Module } from '@nestjs/common';
import { RepoService } from './application/repo.service';
import { RepoController } from './infrastructure/repo.controller';
import { DirectusService } from '../../directus/src/application/directus.service';
import { DirectusModule } from 'src/directus/src/directus.module';

@Module({
  imports: [DirectusModule],
  providers: [RepoService, DirectusService],
  controllers: [RepoController],
})
export class RepoModule {}
