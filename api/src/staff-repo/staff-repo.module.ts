import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffRepoController } from './staff-repo.controller';
import { StaffRepoService } from './staff-repo.service';
import { StaffRepo } from "./staff-repo.entity";

@Module({
    imports: [TypeOrmModule.forFeature([StaffRepo])],
    controllers: [StaffRepoController],
    providers: [StaffRepoService],
})
export class StaffRepoModule {}