import { TypeOrmModule } from "@nestjs/typeorm";
import * as dotenv from "dotenv";
import config from "./config";

dotenv.config();

export const CONFIG_DATABASE = () =>
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
      });