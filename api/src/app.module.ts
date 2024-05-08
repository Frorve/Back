import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StaffModule } from "./users/staff.module";
import { RepoModule } from "./repositorios/repo.module";
import { AuthModule } from "./auth/auth.module";
import { StaffRepoModule } from "./staff-repo/staff-repo.module";
import { ClienteModule } from "./clients/cliente.module";
import { CONFIG_DATABASE } from "./commons/infrastructure/config-database"
import * as dotenv from "dotenv";
import config from "./commons/infrastructure/config";
import { AuthorizationMiddleware } from "./auth/application/auth.middleware";

dotenv.config();
@Module({
  imports: [CONFIG_DATABASE(),
    StaffModule,
    RepoModule,
    AuthModule,
    StaffRepoModule,
    ClienteModule,
  ],
  providers: [StaffModule],
  controllers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthorizationMiddleware).forRoutes('/main');
  }
}
