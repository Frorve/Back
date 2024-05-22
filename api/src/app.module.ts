import { Module } from '@nestjs/common';
import { ClientsModule } from './clients-service/src/clients.module';
import { RepoModule } from './repositorios-service/src/repo.module';
import { StaffModule } from './staff-service/src/staff.module';
import { AuthModule } from './auth-service/src/auth.module';

@Module({
  imports: [
    ClientsModule,
    RepoModule,
    StaffModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
