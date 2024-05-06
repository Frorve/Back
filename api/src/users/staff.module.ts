import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StaffController } from "./infrastructure/staff.controller";
import { StaffService } from "./application/staff.service";
import { Staff } from "./domain/entities/staff.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Staff])],
  controllers: [StaffController],
  providers: [StaffService],
  exports: [StaffService, TypeOrmModule],
})
export class StaffModule {}
