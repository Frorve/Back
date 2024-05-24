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
exports.DirectusController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const directus_service_1 = require("../application/directus.service");
let DirectusController = class DirectusController {
    constructor(directusService) {
        this.directusService = directusService;
    }
    async receiveToken(token) {
        console.log("Token received in controller:", token);
        this.directusService.setToken(token);
    }
};
exports.DirectusController = DirectusController;
__decorate([
    (0, common_1.Post)("token"),
    (0, swagger_1.ApiBody)({ description: "Token recibido", type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Token recibido exitosamente" }),
    __param(0, (0, common_1.Body)("token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DirectusController.prototype, "receiveToken", null);
exports.DirectusController = DirectusController = __decorate([
    (0, swagger_1.ApiTags)("Directus"),
    (0, common_1.Controller)("directus"),
    __metadata("design:paramtypes", [directus_service_1.DirectusService])
], DirectusController);
//# sourceMappingURL=directus.controller.js.map