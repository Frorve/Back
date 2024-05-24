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
exports.ClientsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const clients_service_1 = require("../application/clients.service");
const create_cliente_dto_1 = require("./dto/create-cliente.dto");
const update_cliente_dto_1 = require("./dto/update-cliente.dto");
let ClientsController = class ClientsController {
    constructor(clientsService) {
        this.clientsService = clientsService;
    }
    findAll() {
        return this.clientsService.findAll();
    }
    create(createClienteDto) {
        return this.clientsService.create(createClienteDto);
    }
    update(id, updateClienteDto) {
        return this.clientsService.update(id, updateClienteDto);
    }
    delete(id) {
        return this.clientsService.delete(id);
    }
    findAllByName() {
        return this.clientsService.findAllByName();
    }
};
exports.ClientsController = ClientsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Lista de clientes obtenida exitosamente",
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ description: "Datos del cliente a crear", type: create_cliente_dto_1.CreateClienteDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Cliente creado exitosamente" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cliente_dto_1.CreateClienteDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiParam)({ name: "id", description: "ID del cliente a actualizar" }),
    (0, swagger_1.ApiBody)({
        description: "Datos del cliente a actualizar",
        type: update_cliente_dto_1.UpdateClienteDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Cliente actualizado exitosamente" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cliente_dto_1.UpdateClienteDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiParam)({ name: "id", description: "ID del cliente a eliminar" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Cliente eliminado exitosamente" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)("/name"),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Lista de clientes filtrada por nombre obtenida exitosamente",
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "findAllByName", null);
exports.ClientsController = ClientsController = __decorate([
    (0, swagger_1.ApiTags)("Cliente"),
    (0, common_1.Controller)("cliente"),
    __metadata("design:paramtypes", [clients_service_1.ClientsService])
], ClientsController);
//# sourceMappingURL=clients.controller.js.map