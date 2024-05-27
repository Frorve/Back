"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const dotenv = require("dotenv");
const global_service_1 = require("../../../directus/src/application/global.service");
dotenv.config({ path: ".develop.env" });
let ClientsService = class ClientsService {
    constructor() {
        this.baseUrl = `${process.env.DIRECTUS_URL_CLIENTS}`;
    }
    getAuthHeader() {
        const token = global_service_1.GlobalService.token;
        return { Authorization: `Bearer ${token}` };
    }
    async findAll() {
        const config = {
            headers: this.getAuthHeader(),
        };
        const response = await axios_1.default.get(this.baseUrl, config);
        return response.data;
    }
    async create(createClienteDto) {
        const config = {
            headers: this.getAuthHeader(),
        };
        const response = await axios_1.default.post(this.baseUrl, createClienteDto, config);
        return response.data;
    }
    async update(id, updateClienteDto) {
        const config = {
            headers: this.getAuthHeader(),
        };
        const response = await axios_1.default.patch(`${this.baseUrl}/${id}`, updateClienteDto, config);
        return response.data;
    }
    async delete(id) {
        const config = {
            headers: this.getAuthHeader(),
        };
        const response = await axios_1.default.delete(`${this.baseUrl}/${id}`, config);
        return response.data;
    }
    async findAllByName() {
        const config = {
            headers: this.getAuthHeader(),
        };
        const response = await axios_1.default.get(`${this.baseUrl}?fields=nombre`, config);
        return response.data;
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)()
], ClientsService);
//# sourceMappingURL=clients.service.js.map