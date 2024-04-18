import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StaffModule } from "./staff/staff.module";
import { RepoModule } from "./repo/repo.module";
import { AuthModule } from "./auth/auth.module";
import * as dotenv from "dotenv";
import config from "./config";

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: config.dbType,
      host: config.dbHost,
      port: config.dbPort,
      username: config.dbUsername,
      password: config.dbPassword,
      database: config.dbDatabase,
      entities: config.typeormEntities,
      synchronize: config.typeormSynchronize,
      migrations: config.typeormMigrations,
    }),
    StaffModule,
    RepoModule,
    AuthModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
