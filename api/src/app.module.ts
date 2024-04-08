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


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'postgres',
      entities: [Staff, Repo],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Staff, Repo]),
    
  ],
  providers: [StaffService, RepoService, AuthService],
  controllers: [StaffController, RepoController, AuthController],
})

export class AppModule {}
