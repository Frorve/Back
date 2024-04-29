import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClienteController } from "./cliente.controller";
import { ClienteService } from "./cliente.service";
import { Cliente } from "./cliente.entity";
import { StaffModule } from "../staff/staff.module";

@Module({
  imports: [TypeOrmModule.forFeature([Cliente]), StaffModule],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
