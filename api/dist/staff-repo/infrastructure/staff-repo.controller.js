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
exports.StaffRepoController = void 0;
const common_1 = require("@nestjs/common");
const staff_repo_service_1 = require("../application/staff-repo.service");
const staff_repo_entity_1 = require("../domain/entities/staff-repo.entity");
const create_repo_staff_dto_1 = require("./dto/create-repo-staff.dto");
const swagger_1 = require("@nestjs/swagger");
let StaffRepoController = class StaffRepoController {
    constructor(staffRepoService) {
        this.staffRepoService = staffRepoService;
    }
    async create(staffProjectDto) {
        return this.staffRepoService.create(staffProjectDto);
    }
    async findByStaffId(staffId) {
        const parsedStaffId = parseInt(staffId, 10);
        return this.staffRepoService.findByStaffId(parsedStaffId);
    }
    async findByrepoId(repoId) {
        const parsedRepoId = parseInt(repoId, 10);
        return this.staffRepoService.findByrepoId(parsedRepoId);
    }
    async removeByrepoId(repoId) {
        return this.staffRepoService.removeByrepoId(+repoId);
    }
    async findUsersByrepoId(repoId) {
        try {
            const members = await this.staffRepoService.findByrepoId(repoId);
            const usernames = await Promise.all(members.map(async (member) => {
                const user = await this.staffRepoService.findUserById(member.staff_id);
                return user ? user.username : null;
            }));
            return usernames.filter((username) => username !== null);
        }
        catch (error) {
            console.error("Error fetching users by project ID:", error.message);
            throw new Error("Failed to fetch users");
        }
    }
    async findOne(staffId, repoId) {
        return this.staffRepoService.findOne(+staffId, +repoId);
    }
    async findAll() {
        return this.staffRepoService.findAll();
    }
    async update(staffId, repoId, staffProjectDto) {
        return this.staffRepoService.update(+staffId, +repoId, staffProjectDto);
    }
    async remove(staffId, repoId) {
        return this.staffRepoService.remove(+staffId, +repoId);
    }
    async findByUsername(username) {
        return this.staffRepoService.findByUsername(username);
    }
};
exports.StaffRepoController = StaffRepoController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Crear relacion de personal con repositorio" }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Relación de personal y repositorio creada correctamente' }),
    (0, swagger_1.ApiBody)({ type: create_repo_staff_dto_1.StaffRepoDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_repo_staff_dto_1.StaffRepoDto]),
    __metadata("design:returntype", Promise)
], StaffRepoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("staff/:staffId"),
    (0, swagger_1.ApiOperation)({ summary: "Obtener el staff por ID" }),
    (0, swagger_1.ApiParam)({ name: 'staffId', description: 'ID del personal', type: 'string' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Relaciones de personal encontradas', type: [staff_repo_entity_1.StaffRepo] }),
    __param(0, (0, common_1.Param)("staffId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StaffRepoController.prototype, "findByStaffId", null);
__decorate([
    (0, common_1.Get)("project/:repoId"),
    (0, swagger_1.ApiOperation)({ summary: "Obtener los proyectos por ID" }),
    (0, swagger_1.ApiParam)({ name: 'repoId', description: 'ID del repositorio', type: 'string' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Relaciones de personal encontradas', type: [staff_repo_entity_1.StaffRepo] }),
    __param(0, (0, common_1.Param)("repoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StaffRepoController.prototype, "findByrepoId", null);
__decorate([
    (0, common_1.Delete)("project/:repoId"),
    (0, swagger_1.ApiOperation)({ summary: "Eliminar proyecto por ID" }),
    (0, swagger_1.ApiParam)({ name: 'repoId', description: 'ID del repositorio', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Relaciones de personal eliminadas correctamente' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Repositorio no encontrado' }),
    __param(0, (0, common_1.Param)("repoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StaffRepoController.prototype, "removeByrepoId", null);
__decorate([
    (0, common_1.Get)("project/:repoId/users"),
    (0, swagger_1.ApiOperation)({ summary: "Obtener los usuarios que tiene asociado cada proyecto" }),
    (0, swagger_1.ApiParam)({ name: 'repoId', description: 'ID del repositorio', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Usuarios encontrados', type: [String] }),
    __param(0, (0, common_1.Param)("repoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StaffRepoController.prototype, "findUsersByrepoId", null);
__decorate([
    (0, common_1.Get)(":staffId/:repoId"),
    (0, swagger_1.ApiOperation)({ summary: "Obtener un usario y que proyectos tiene relacionados" }),
    (0, swagger_1.ApiParam)({ name: 'staffId', description: 'ID del personal', type: 'number' }),
    (0, swagger_1.ApiParam)({ name: 'repoId', description: 'ID del repositorio', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Relación de personal encontrada', type: staff_repo_entity_1.StaffRepo }),
    __param(0, (0, common_1.Param)("staffId")),
    __param(1, (0, common_1.Param)("repoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], StaffRepoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Obtener todos los proyectos y sus correspondientes usuarios" }),
    (0, swagger_1.ApiOkResponse)({ description: 'Todas las relaciones de personal y repositorio encontradas', type: [staff_repo_entity_1.StaffRepo] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StaffRepoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(":staffId/:repoId"),
    (0, swagger_1.ApiOperation)({ summary: "Actualizar el proyecto" }),
    (0, swagger_1.ApiParam)({ name: 'staffId', description: 'ID del personal', type: 'number' }),
    (0, swagger_1.ApiParam)({ name: 'repoId', description: 'ID del repositorio', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Relación de personal y repositorio actualizada correctamente' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Datos de entrada inválidos' }),
    __param(0, (0, common_1.Param)("staffId")),
    __param(1, (0, common_1.Param)("repoId")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, create_repo_staff_dto_1.StaffRepoDto]),
    __metadata("design:returntype", Promise)
], StaffRepoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":staffId/:repoId"),
    (0, swagger_1.ApiOperation)({ summary: "Eliminar el proyecto" }),
    (0, swagger_1.ApiParam)({ name: 'staffId', description: 'ID del personal', type: 'number' }),
    (0, swagger_1.ApiParam)({ name: 'repoId', description: 'ID del repositorio', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Relación de personal y repositorio eliminada correctamente' }),
    __param(0, (0, common_1.Param)("staffId")),
    __param(1, (0, common_1.Param)("repoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], StaffRepoController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)("repo/:username"),
    (0, swagger_1.ApiOperation)({ summary: "Obtener los proyectos de un usuario" }),
    (0, swagger_1.ApiParam)({ name: 'username', description: 'Nombre de usuario', type: 'string' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Relaciones de personal y repositorio encontradas', type: [staff_repo_entity_1.StaffRepo] }),
    __param(0, (0, common_1.Param)("username")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StaffRepoController.prototype, "findByUsername", null);
exports.StaffRepoController = StaffRepoController = __decorate([
    (0, swagger_1.ApiTags)('Staff Repos'),
    (0, common_1.Controller)("staff-repo"),
    __metadata("design:paramtypes", [staff_repo_service_1.StaffRepoService])
], StaffRepoController);
//# sourceMappingURL=staff-repo.controller.js.map