"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const dotenv = require("dotenv");
dotenv.config({ path: ".develop.env" });
let AuthService = class AuthService {
    constructor() {
        this.baseUrl = `${process.env.DIRECTUS_URL_AUTH}`;
        this.baseUrlReg = `${process.env.DIRECTUS_URL_AUTH_REGISTER}`;
    }
    async login(credentials) {
        const response = await axios_1.default.post(this.baseUrl, credentials);
        this.accessToken = response.data.data.access_token;
        return response.data;
    }
    async register(credentials) {
        const response = await axios_1.default.post(this.baseUrlReg, credentials);
        return response.data;
    }
    getToke() {
        return this.accessToken;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map