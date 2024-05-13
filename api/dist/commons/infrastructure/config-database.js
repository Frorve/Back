"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG_DATABASE = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const dotenv = require("dotenv");
const config_1 = require("./config");
dotenv.config();
const CONFIG_DATABASE = () => typeorm_1.TypeOrmModule.forRoot({
    type: config_1.default.dbType,
    host: config_1.default.dbHost,
    port: config_1.default.dbPort,
    username: config_1.default.dbUsername,
    password: config_1.default.dbPassword,
    database: config_1.default.dbDatabase,
    entities: config_1.default.typeormEntities,
    synchronize: config_1.default.typeormSynchronize,
    migrations: config_1.default.typeormMigrations,
});
exports.CONFIG_DATABASE = CONFIG_DATABASE;
//# sourceMappingURL=config-database.js.map