import { Module } from '@nestjs/common';
import { StaffService } from './application/staff.service';
import { StaffController } from './infrastructure/staff.controller';

@Module({
  providers: [StaffService],
  controllers: [StaffController],
})
export class StaffModule {}
