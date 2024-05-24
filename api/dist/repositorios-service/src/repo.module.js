"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepoModule = void 0;
const common_1 = require("@nestjs/common");
const repo_service_1 = require("./application/repo.service");
const repo_controller_1 = require("./infrastructure/repo.controller");
const directus_service_1 = require("../../directus/src/application/directus.service");
const directus_module_1 = require("../../directus/src/directus.module");
let RepoModule = class RepoModule {
};
exports.RepoModule = RepoModule;
exports.RepoModule = RepoModule = __decorate([
    (0, common_1.Module)({
        imports: [directus_module_1.DirectusModule],
        providers: [repo_service_1.RepoService, directus_service_1.DirectusService],
        controllers: [repo_controller_1.RepoController],
    })
], RepoModule);
//# sourceMappingURL=repo.module.js.map