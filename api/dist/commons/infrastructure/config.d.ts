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
declare const config: Config;
export default config;
