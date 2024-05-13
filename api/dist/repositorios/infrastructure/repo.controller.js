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
const repo_service_1 = require("../application/repo.service");
const repo_entity_1 = require("../domain/entities/repo.entity");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const create_repo_dto_1 = require("./dto/create-repo.dto");
const update_repo_dto_1 = require("./dto/update-repo.dto");
const PlatformTools_1 = require("typeorm/platform/PlatformTools");
let RepoController = class RepoController {
    constructor(repoService) {
        this.repoService = repoService;
    }
    createRepo(createRepoDto, archivo, username) {
        return this.repoService.createRepo(createRepoDto, username, archivo);
    }
    async downloadFile(id, res) {
        const repo = await this.repoService.getRepoById(id);
        if (!repo || !repo.archivo) {
            throw new common_1.NotFoundException(`Repo with id ${id} not found`);
        }
        res.setHeader("Content-Type", "application/octet-stream");
        res.setHeader("Content-Disposition", `attachment; filename=${repo.nombreArchivo}`);
        const stream = PlatformTools_1.Readable.from(repo.archivo);
        stream.pipe(res);
    }
    async getAllRepo(username) {
        return this.repoService.getAllRepoByUsername(username);
    }
    getRepoById(id) {
        return this.repoService.getRepoById(id);
    }
    async updateRepo(id, archivo, updateRepoDto) {
        updateRepoDto.archivo = archivo;
        return this.repoService.updateRepo(+id, updateRepoDto);
    }
    deleteRepo(id) {
        return this.repoService.deleteRepo(+id);
    }
    async getCollaboratorRepos(username) {
        return this.repoService.getReposForCollaborator(username);
    }
    async getCollaboratorsByProjectId(projectId) {
        return this.repoService.getCollaboratorsByProjectId(projectId);
    }
    async getClientsByProjectId(projectId) {
        return this.repoService.getClientsByProjectId(projectId);
    }
    async updateTimeEntry(id, UpdateRepoDto) {
        return this.repoService.updateTimeEntry(id, UpdateRepoDto);
    }
    async getTimeEntry(id) {
        return this.repoService.getTimeEntry(id);
    }
};
exports.RepoController = RepoController;
__decorate([
    (0, common_1.Post)(":username"),
    (0, swagger_1.ApiOperation)({ summary: "Crear un nuevo repositorio" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Repositorio creado exitosamente" }),
    (0, swagger_1.ApiBody)({ type: repo_entity_1.Repo }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("archivo")),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Param)("username")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_repo_dto_1.CreateRepoDto, Object, String]),
    __metadata("design:returntype", void 0)
], RepoController.prototype, "createRepo", null);
__decorate([
    (0, common_1.Get)("download/:id"),
    (0, swagger_1.ApiOperation)({
        summary: "Descargar el archivo asociado al ID de un proyecto",
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RepoController.prototype, "downloadFile", null);
__decorate([
    (0, common_1.Get)(":username"),
    (0, swagger_1.ApiOperation)({ summary: "Obtener los repositorios por usuario logeado" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Repositorios encontrados",
        type: [repo_entity_1.Repo],
    }),
    __param(0, (0, common_1.Param)("username")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RepoController.prototype, "getAllRepo", null);
__decorate([
    (0, common_1.Get)("search/:id"),
    (0, swagger_1.ApiOperation)({ summary: "Obtener un repositorio por ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Repositorio encontrado",
        type: repo_entity_1.Repo,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Repositorio no encontrado" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RepoController.prototype, "getRepoById", null);
__decorate([
    (0, common_1.Put)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Actualizar un repositorio por ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Repositorio actualizado exitosamente",
        type: repo_entity_1.Repo,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Repositorio no encontrado" }),
    (0, swagger_1.ApiBody)({ type: repo_entity_1.Repo }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("archivo")),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_repo_dto_1.UpdateRepoDto]),
    __metadata("design:returntype", Promise)
], RepoController.prototype, "updateRepo", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Eliminar un repositorio por ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Repositorio eliminado exitosamente",
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RepoController.prototype, "deleteRepo", null);
__decorate([
    (0, common_1.Get)("collaborator-repos/:username"),
    (0, swagger_1.ApiOperation)({
        summary: "Obtener repositorios en los que el usuario es un colaborador",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Repositorios encontrados",
        type: [repo_entity_1.Repo],
    }),
    __param(0, (0, common_1.Param)("username")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RepoController.prototype, "getCollaboratorRepos", null);
__decorate([
    (0, common_1.Get)("collaborators/:projectId"),
    (0, swagger_1.ApiOperation)({ summary: "Obtener colaboradores de un proyecto por ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Colaboradores encontrados",
        type: [String],
    }),
    __param(0, (0, common_1.Param)("projectId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RepoController.prototype, "getCollaboratorsByProjectId", null);
__decorate([
    (0, common_1.Get)("clients/:projectId"),
    (0, swagger_1.ApiOperation)({ summary: "Obtener clientes de un proyecto por ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Clientes encontrados",
        type: [String],
    }),
    __param(0, (0, common_1.Param)("projectId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RepoController.prototype, "getClientsByProjectId", null);
__decorate([
    (0, common_1.Patch)("time/:id"),
    (0, swagger_1.ApiOperation)({ summary: "Actualizar el tiempo de un repositorio por ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Tiempo actualizado exitosamente",
        type: repo_entity_1.Repo,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Repositorio no encontrado" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RepoController.prototype, "updateTimeEntry", null);
__decorate([
    (0, common_1.Get)("time/:id"),
    (0, swagger_1.ApiOperation)({ summary: "Obtener el tiempo de un repositorio por ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Tiempo obtenido exitosamente",
        type: repo_entity_1.Repo,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Repositorio no encontrado" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RepoController.prototype, "getTimeEntry", null);
exports.RepoController = RepoController = __decorate([
    (0, common_1.Controller)("repo"),
    (0, swagger_1.ApiTags)("Repo"),
    __metadata("design:paramtypes", [repo_service_1.RepoService])
], RepoController);
//# sourceMappingURL=repo.controller.js.map