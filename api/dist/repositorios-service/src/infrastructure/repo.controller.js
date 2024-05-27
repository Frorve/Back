"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const repo_service_1 = require("../application/repo.service");
const create_repo_dto_1 = require("./dto/create-repo.dto");
const update_repo_dto_1 = require("./dto/update-repo.dto");
let RepoController = class RepoController {
    constructor(repoService) {
        this.repoService = repoService;
    }
    findAll() {
        return this.repoService.findAll();
    }
    create(createRepoDto) {
        return this.repoService.create(createRepoDto);
    }
    update(id, updateRepoDto) {
        return this.repoService.update(id, updateRepoDto);
    }
    delete(id) {
        return this.repoService.delete(id);
    }
    async getReposByAuthor(username) {
        return this.repoService.getReposByAuthor(username);
    }
    async getReposByCollaborator(username) {
        return this.repoService.getReposByCollaborator(username);
    }
    async getTimeByProject(id) {
        return this.repoService.getTimeByProject(id);
    }
    async UpdateTimeByProject(id, updateRepoDto) {
        return this.repoService.updateTimeByProject(id, updateRepoDto);
    }
    async getCollaboratorByRepo(id) {
        return this.repoService.getCollaboratorByRepo(id);
    }
    async UpdateCollaboratorByRepo(id, updateRepoDto) {
        return this.repoService.updateCollaboratorByRepo(id, updateRepoDto);
    }
    async getClientsByRepo(id) {
        return this.repoService.getClientsByRepo(id);
    }
    async UpdateClientByRepo(id, updateRepoDto) {
        return this.repoService.updateClientByRepo(id, updateRepoDto);
    }
};
exports.RepoController = RepoController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Lista de repositorios obtenida exitosamente",
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RepoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({
        description: "Datos del repositorio a crear",
        type: create_repo_dto_1.CreateRepoDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Repositorio creado exitosamente" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_repo_dto_1.CreateRepoDto]),
    __metadata("design:returntype", void 0)
], RepoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id"),
    (0, swagger_1.ApiParam)({ name: "id", description: "ID del repositorio a actualizar" }),
    (0, swagger_1.ApiBody)({
        description: "Datos del repositorio a actualizar",
        type: update_repo_dto_1.UpdateRepoDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Repositorio actualizado exitosamente",
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_repo_dto_1.UpdateRepoDto]),
    __metadata("design:returntype", void 0)
], RepoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiParam)({ name: "id", description: "ID del repositorio a eliminar" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Repositorio eliminado exitosamente",
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RepoController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)("autor/:username"),
    (0, swagger_1.ApiParam)({ name: "username", description: "Nombre de usuario del autor" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Lista de repositorios del autor obtenida exitosamente",
    }),
    __param(0, (0, common_1.Param)("username")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RepoController.prototype, "getReposByAuthor", null);
__decorate([
    (0, common_1.Get)("colaborador/:username"),
    (0, swagger_1.ApiParam)({
        name: "username",
        description: "Nombre de usuario del colaborador",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Lista de repositorios del colaborador obtenida exitosamente",
    }),
    __param(0, (0, common_1.Param)("username")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RepoController.prototype, "getReposByCollaborator", null);
__decorate([
    (0, common_1.Get)("time/:id"),
    (0, swagger_1.ApiParam)({ name: "id", description: "ID del proyecto" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Tiempo del proyecto obtenido exitosamente",
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RepoController.prototype, "getTimeByProject", null);
__decorate([
    (0, common_1.Patch)("time/:id"),
    (0, swagger_1.ApiParam)({ name: "id", description: "ID del proyecto" }),
    (0, swagger_1.ApiBody)({
        description: "Datos del tiempo del proyecto a actualizar",
        type: update_repo_dto_1.UpdateRepoDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Tiempo del proyecto actualizado exitosamente",
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_repo_dto_1.UpdateRepoDto]),
    __metadata("design:returntype", Promise)
], RepoController.prototype, "UpdateTimeByProject", null);
__decorate([
    (0, common_1.Get)("colaborador/project/:id"),
    (0, swagger_1.ApiParam)({ name: "id", description: "ID del proyecto" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Lista de colaboradores del proyecto obtenida exitosamente",
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RepoController.prototype, "getCollaboratorByRepo", null);
__decorate([
    (0, common_1.Patch)("colaborador/project/:id"),
    (0, swagger_1.ApiParam)({ name: "id", description: "ID del proyecto" }),
    (0, swagger_1.ApiBody)({
        description: "Datos del colaborador del proyecto a actualizar",
        type: update_repo_dto_1.UpdateRepoDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Colaborador del proyecto actualizado exitosamente",
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_repo_dto_1.UpdateRepoDto]),
    __metadata("design:returntype", Promise)
], RepoController.prototype, "UpdateCollaboratorByRepo", null);
__decorate([
    (0, common_1.Get)("cliente/project/:id"),
    (0, swagger_1.ApiParam)({ name: "id", description: "ID del proyecto" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Lista de clientes del proyecto obtenida exitosamente",
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RepoController.prototype, "getClientsByRepo", null);
__decorate([
    (0, common_1.Patch)("cliente/project/:id"),
    (0, swagger_1.ApiParam)({ name: "id", description: "ID del proyecto" }),
    (0, swagger_1.ApiBody)({
        description: "Datos del cliente del proyecto a actualizar",
        type: update_repo_dto_1.UpdateRepoDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Cliente del proyecto actualizado exitosamente",
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_repo_dto_1.UpdateRepoDto]),
    __metadata("design:returntype", Promise)
], RepoController.prototype, "UpdateClientByRepo", null);
exports.RepoController = RepoController = __decorate([
    (0, swagger_1.ApiTags)("Repo"),
    (0, common_1.Controller)("repo"),
    __metadata("design:paramtypes", [repo_service_1.RepoService])
], RepoController);
//# sourceMappingURL=repo.controller.js.map