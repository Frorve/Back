"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const dotenv = require("dotenv");
dotenv.config({ path: ".develop.env" });
let UserService = class UserService {
    constructor() {
        this.baseUrl = `${process.env.DIRECTUS_URL_REGISTER}`;
    }
    async findAll() {
        const response = await axios_1.default.get(this.baseUrl);
        return response.data;
    }
    async findMe() {
        const response = await axios_1.default.get(`${this.baseUrl}/me`);
        return response.data;
    }
    async create(createUserDto) {
        const response = await axios_1.default.post(this.baseUrl, createUserDto);
        return response.data;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map