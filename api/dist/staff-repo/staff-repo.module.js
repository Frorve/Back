"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffRepoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const staff_repo_controller_1 = require("./infrastructure/staff-repo.controller");
const staff_repo_service_1 = require("./application/staff-repo.service");
const staff_repo_entity_1 = require("./domain/entities/staff-repo.entity");
let StaffRepoModule = class StaffRepoModule {
};
exports.StaffRepoModule = StaffRepoModule;
exports.StaffRepoModule = StaffRepoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([staff_repo_entity_1.StaffRepo])],
        controllers: [staff_repo_controller_1.StaffRepoController],
        providers: [staff_repo_service_1.StaffRepoService],
    })
], StaffRepoModule);
//# sourceMappingURL=staff-repo.module.js.map