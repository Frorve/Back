import { Module } from '@nestjs/common';
import { UserService } from './application/user.service';
import { UserController } from './infrastructure/user.controller';

@Module({
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
