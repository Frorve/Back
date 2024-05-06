import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RepoController } from "./infrastructure/repo.controller";
import { RepoService } from "./application/repo.service";
import { Repo } from "./domain/entities/repo.entity";
import { StaffModule } from "../users/staff.module";

@Module({
  imports: [TypeOrmModule.forFeature([Repo]), StaffModule],
  controllers: [RepoController],
  providers: [RepoService],
})
export class RepoModule {}
