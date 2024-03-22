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
const typeorm_1 = require("@nestjs/typeorm");
const poll_entity_1 = require("./poll/poll.entity");
const poll_service_1 = require("./poll/poll.service");
const poll_controller_1 = require("./poll/poll.controller");
const staff_entity_1 = require("./staff/staff.entity");
const staff_service_1 = require("./staff/staff.service");
const staff_controller_1 = require("./staff/staff.controller");
const repo_entity_1 = require("./repo/repo.entity");
const repo_service_1 = require("./repo/repo.service");
const repo_controller_1 = require("./repo/repo.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'user',
                password: 'password',
                database: 'dbname',
                entities: [staff_entity_1.Staff, poll_entity_1.Poll, repo_entity_1.Repo],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([poll_entity_1.Poll, staff_entity_1.Staff, repo_entity_1.Repo]),
        ],
        providers: [poll_service_1.PollService, staff_service_1.StaffService, repo_service_1.RepoService],
        controllers: [poll_controller_1.PollController, staff_controller_1.StaffController, repo_controller_1.RepoController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map