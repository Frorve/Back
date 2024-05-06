import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClienteController } from "./infrastructure/cliente.controller";
import { ClienteService } from "./application/cliente.service";
import { Cliente } from "./domain/entities/cliente.entity";
import { StaffModule } from "../users/staff.module";

@Module({
  imports: [TypeOrmModule.forFeature([Cliente]), StaffModule],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
