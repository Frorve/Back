import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RepoController } from "./repo.controller";
import { RepoService } from "./repo.service";
import { Repo } from "./repo.entity";
import { StaffModule } from "../staff/staff.module";

@Module({
  imports: [TypeOrmModule.forFeature([Repo]), StaffModule],
  controllers: [RepoController],
  providers: [RepoService],
})
export class RepoModule {}
