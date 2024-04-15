import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepoController } from './repo.controller';
import { RepoService } from './repo.service';
import { Repo } from './repo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Repo])],
  controllers: [RepoController],
  providers: [RepoService],
})
export class RepoModule {}
