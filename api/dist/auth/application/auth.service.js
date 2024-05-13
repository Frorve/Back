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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const staff_entity_1 = require("../../users/domain/entities/staff.entity");
const jwt = require("jsonwebtoken");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AuthService = class AuthService {
    constructor(staffRepository) {
        this.staffRepository = staffRepository;
        this.JWT_SECRET = process.env.JWT_SECRET;
    }
    async registerUser(createStaffDto) {
        const { nombre, cargo, correoElectronico, contraseña } = createStaffDto;
        const existingUser = await this.staffRepository.findOne({
            where: [{ nombre }, { correoElectronico }],
        });
        if (existingUser) {
            throw new common_1.ConflictException("El nombre de usuario o correo electrónico ya están en uso");
        }
        const hashedPassword = await bcrypt.hash(contraseña, 10);
        const staff = this.staffRepository.create({
            nombre,
            cargo,
            correoElectronico,
            contraseña: hashedPassword,
        });
        return this.staffRepository.save(staff);
    }
    async login(loginStaffDto) {
        const { nombre, contraseña } = loginStaffDto;
        const user = await this.staffRepository.findOne({
            where: { nombre: nombre },
        });
        if (!user) {
            throw new common_1.UnauthorizedException("Credenciales incorrectas");
        }
        const passwordMatch = await bcrypt.compare(contraseña, user.contraseña);
        if (!passwordMatch) {
            throw new common_1.UnauthorizedException("Credenciales incorrectas");
        }
        const payload = {
            nombre: user.nombre,
            cargo: user.cargo,
            correoElectronico: user.correoElectronico,
        };
        const token = jwt.sign(payload, this.JWT_SECRET, { expiresIn: "300h" });
        return token;
    }
    async verifyToken(token) {
        try {
            const decoded = jwt.verify(token, this.JWT_SECRET);
            return decoded;
        }
        catch (error) {
            throw new common_1.UnauthorizedException("Token inválido");
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(staff_entity_1.Staff)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map