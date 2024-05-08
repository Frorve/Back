import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "./infrastructure/auth.controller";
import { AuthService } from "./application/auth.service";
import { Staff } from "../users/domain/entities/staff.entity";
import { StaffService } from "../users/application/staff.service";

@Module({
  imports: [TypeOrmModule.forFeature([Staff])],
  controllers: [AuthController],
  providers: [AuthService, StaffService],
})
export class AuthModule {}
