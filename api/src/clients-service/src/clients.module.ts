import { Module } from '@nestjs/common';
import { ClientsService } from './application/clients.service';
import { ClientsController } from './infrastructure/clients.controller';

@Module({
  providers: [ClientsService],
  controllers: [ClientsController],
})
export class ClientsModule {}
