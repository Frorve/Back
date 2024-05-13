"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const staff_module_1 = require("./users/staff.module");
const repo_module_1 = require("./repositorios/repo.module");
const auth_module_1 = require("./auth/auth.module");
const staff_repo_module_1 = require("./staff-repo/staff-repo.module");
const cliente_module_1 = require("./clients/cliente.module");
const config_database_1 = require("./commons/infrastructure/config-database");
const dotenv = require("dotenv");
const auth_middleware_1 = require("./auth/application/auth.middleware");
dotenv.config();
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthorizationMiddleware).forRoutes('/main');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [(0, config_database_1.CONFIG_DATABASE)(),
            staff_module_1.StaffModule,
            repo_module_1.RepoModule,
            auth_module_1.AuthModule,
            staff_repo_module_1.StaffRepoModule,
            cliente_module_1.ClienteModule,
        ],
        providers: [staff_module_1.StaffModule],
        controllers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map