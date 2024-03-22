import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poll } from './poll/poll.entity';
import { PollService } from './poll/poll.service';
import { PollController } from './poll/poll.controller';
import { Staff } from './staff/staff.entity';
import { StaffService } from './staff/staff.service';
import { StaffController } from './staff/staff.controller';
import { Repo } from './repo/repo.entity';
import { RepoService } from './repo/repo.service';
import { RepoController } from './repo/repo.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'postgres',
      entities: [Staff, Poll, Repo],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Poll, Staff, Repo]),
    
  ],
  providers: [PollService, StaffService, RepoService],
  controllers: [PollController, StaffController, RepoController],
})

export class AppModule {}
