import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './staff/staff.entity';
import { StaffService } from './staff/staff.service';
import { StaffController } from './staff/staff.controller';
import { Repo } from './repo/repo.entity';
import { RepoService } from './repo/repo.service';
import { RepoController } from './repo/repo.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { StaffRepo } from './staff-repo/staff-repo.entity';
import { StaffRepoController } from './staff-repo/staff-repo.controller';
import { StaffRepoService } from './staff-repo/staff-repo.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'postgres',
      entities: [Staff, Repo, StaffRepo],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Staff, Repo, StaffRepo]),
    
  ],
  providers: [StaffService, RepoService, AuthService, StaffRepoService],
  controllers: [StaffController, RepoController, AuthController, StaffRepoController],
})

export class AppModule {}
