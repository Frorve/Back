import { Module } from '@nestjs/common';
import { DirectusService } from './application/directus.service';
import { DirectusController } from './infrastructure/directus.controller';

@Module({
  providers: [DirectusService],
  controllers: [DirectusController],
  exports: [DirectusService],
})
export class DirectusModule {}
