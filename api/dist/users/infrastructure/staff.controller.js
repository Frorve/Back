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
exports.StaffController = void 0;
const common_1 = require("@nestjs/common");
const staff_service_1 = require("../application/staff.service");
const swagger_1 = require("@nestjs/swagger");
const staff_entity_1 = require("../domain/entities/staff.entity");
let StaffController = class StaffController {
    constructor(staffService) {
        this.staffService = staffService;
    }
    async searchStaff(query) {
        try {
            const users = await this.staffService.searchStaff(query);
            return users;
        }
        catch (error) {
            console.error("Error al buscar usuarios:", error);
            throw new Error("Error al buscar usuarios");
        }
    }
    getAllStaff() {
        return this.staffService.getAllStaff();
    }
    async getByUsername(username) {
        try {
            const user = await this.staffService.findByUsername(username);
            return user;
        }
        catch (error) {
            console.error("Error al buscar usuario por nombre de usuario:", error);
            throw new Error("Error al buscar usuario por nombre de usuario");
        }
    }
};
exports.StaffController = StaffController;
__decorate([
    (0, common_1.Get)("search"),
    (0, swagger_1.ApiOperation)({ summary: "Buscar personal por nombre o correo electrónico" }),
    (0, swagger_1.ApiQuery)({ name: "query", description: "Cadena de búsqueda" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Personal encontrado",
        type: [staff_entity_1.Staff],
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "No se encontró personal" }),
    __param(0, (0, common_1.Query)("query")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StaffController.prototype, "searchStaff", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Obtener todo el personal" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Personal encontrado",
        type: [staff_entity_1.Staff],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StaffController.prototype, "getAllStaff", null);
__decorate([
    (0, common_1.Get)("username/:username"),
    (0, swagger_1.ApiOperation)({ summary: "Obtener personal por nombre de usuario" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Usuario encontrado",
        type: staff_entity_1.Staff,
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Usuario no encontrado" }),
    __param(0, (0, common_1.Param)("username")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StaffController.prototype, "getByUsername", null);
exports.StaffController = StaffController = __decorate([
    (0, common_1.Controller)("staff"),
    (0, swagger_1.ApiTags)("Staff"),
    __metadata("design:paramtypes", [staff_service_1.StaffService])
], StaffController);
//# sourceMappingURL=staff.controller.js.map