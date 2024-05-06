import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffRepoController } from './infrastructure/staff-repo.controller';
import { StaffRepoService } from './application/staff-repo.service';
import { StaffRepo } from "./domain/entities/staff-repo.entity";

@Module({
    imports: [TypeOrmModule.forFeature([StaffRepo])],
    controllers: [StaffRepoController],
    providers: [StaffRepoService],
})
export class StaffRepoModule {}