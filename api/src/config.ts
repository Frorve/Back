import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.develop.env") });

interface Config {
  dbType: "postgres";
  dbHost: string;
  dbPort: number;
  dbUsername: string;
  dbPassword: string;
  dbDatabase: string;
  typeormSynchronize: boolean;
  typeormEntities: string[];
  typeormMigrations: string[];
  typeormMigrationsDir: string;
  appPort: number;
  jwtSecret: string;
  jwtExpirationTime: number;
  cors: string;
}

const config: Config = {
  dbType: "postgres",
  dbHost: process.env.DB_HOST,
  dbPort: parseInt(process.env.DB_PORT, 10),
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbDatabase: process.env.DB_DATABASE,
  typeormSynchronize: process.env.TYPEORM_SYNCHRONIZE === "true",
  typeormEntities: process.env.TYPEORM_ENTITIES.split(","),
  typeormMigrations: process.env.TYPEORM_MIGRATIONS.split(","),
  typeormMigrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
  appPort: parseInt(process.env.APP_PORT, 10),
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationTime: parseInt(process.env.JWT_EXPIRATION_TIME, 10),
  cors: process.env.CORS,
};

export default config;
