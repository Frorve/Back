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
exports.ClienteController = void 0;
const common_1 = require("@nestjs/common");
const cliente_service_1 = require("../application/cliente.service");
const create_cliente_dto_1 = require("./dto/create-cliente.dto");
const update_cliente_dto_1 = require("./dto/update-cliente.dto");
const swagger_1 = require("@nestjs/swagger");
let ClienteController = class ClienteController {
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    async create(createClienteDto) {
        return this.clienteService.create(createClienteDto);
    }
    async update(id, updateClienteDto) {
        return this.clienteService.update(+id, updateClienteDto);
    }
    async delete(id) {
        return this.clienteService.delete(+id);
    }
    async findAll() {
        return this.clienteService.findAll();
    }
    async findOne(id) {
        return this.clienteService.findOne(+id);
    }
};
exports.ClienteController = ClienteController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Crear un cliente nuevo" }),
    (0, swagger_1.ApiCreatedResponse)({ description: "Cliente creado correctamente" }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Datos de entrada inválidos" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cliente_dto_1.CreateClienteDto]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Actualizar un cliente" }),
    (0, swagger_1.ApiOkResponse)({ description: "Cliente actualizado correctamente" }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Datos de entrada inválidos" }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Cliente no encontrado" }),
    (0, swagger_1.ApiParam)({
        name: "id",
        description: "ID del cliente a actualizar",
        type: "string",
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cliente_dto_1.UpdateClienteDto]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Eliminar un cliente" }),
    (0, swagger_1.ApiOkResponse)({ description: "Cliente eliminado correctamente" }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Cliente no encontrado" }),
    (0, swagger_1.ApiParam)({
        name: "id",
        description: "ID del cliente a eliminar",
        type: "string",
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)("/all"),
    (0, swagger_1.ApiOperation)({ summary: "Obtener todos los clientes" }),
    (0, swagger_1.ApiOkResponse)({
        description: "Lista de todos los clientes",
        type: [create_cliente_dto_1.CreateClienteDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Obtener un cliente por ID" }),
    (0, swagger_1.ApiOkResponse)({ description: "Cliente encontrado", type: create_cliente_dto_1.CreateClienteDto }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Cliente no encontrado" }),
    (0, swagger_1.ApiParam)({
        name: "id",
        description: "ID del cliente a buscar",
        type: "string",
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "findOne", null);
exports.ClienteController = ClienteController = __decorate([
    (0, swagger_1.ApiTags)("Clientes"),
    (0, common_1.Controller)("cliente"),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService])
], ClienteController);
//# sourceMappingURL=cliente.controller.js.map