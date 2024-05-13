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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../application/auth.service");
const create_staff_dto_1 = require("../../commons/domain/dto/create-staff.dto");
const login_staff_dto_1 = require("../../commons/domain/dto/login-staff.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../application/jwt-auth.guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(loginStaffDto) {
        const token = await this.authService.login(loginStaffDto);
        if (!token) {
            throw new common_1.UnauthorizedException("Credenciales incorrectas");
        }
        return {
            success: true,
            token: token,
        };
    }
    async register(createStaffDto) {
        try {
            const newUser = await this.authService.registerUser(createStaffDto);
            return {
                message: "Usuario creado exitosamente",
                success: true,
                user: newUser,
            };
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.ConflictException("El nombre de usuario o correo electrónico ya están en uso");
            }
            throw error;
        }
    }
    async getMain(req) {
        return { message: "Has accedido a la ruta protegida /main/" };
    }
    async verifyToken({ token }) {
        try {
            const decoded = await this.authService.verifyToken(token);
            return { success: true, user: decoded };
        }
        catch (error) {
            throw new common_1.UnauthorizedException("Token inválido");
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("login"),
    (0, swagger_1.ApiOperation)({ summary: "Iniciar sesión del personal" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Inicio de sesión exitoso" }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: "Credenciales incorrectas" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_staff_dto_1.LoginStaffDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)("register"),
    (0, swagger_1.ApiOperation)({ summary: "Crear nuevo personal" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Personal creado exitosamente" }),
    (0, swagger_1.ApiConflictResponse)({
        description: "El nombre de usuario o correo electrónico ya están en uso",
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_staff_dto_1.CreateStaffDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Get)("main"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: "Acceder a la ruta protegida /main/" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Has accedido a la ruta protegida /main/",
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getMain", null);
__decorate([
    (0, common_1.Post)("verify-token"),
    (0, swagger_1.ApiOperation)({ summary: "Verificar token" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Token válido" }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: "Token inválido" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyToken", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    (0, swagger_1.ApiTags)("Auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map