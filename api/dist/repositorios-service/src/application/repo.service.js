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
exports.RepoService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const update_repo_dto_1 = require("../infrastructure/dto/update-repo.dto");
const global_service_1 = require("../../../directus/src/application/global.service");
let RepoService = class RepoService {
    constructor() {
        this.baseUrl = `${process.env.DIRECTUS_URL_REPO}`;
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
    async create(createRepoDto) {
        const config = {
            headers: this.getAuthHeader(),
        };
        const response = await axios_1.default.post(this.baseUrl, createRepoDto, config);
        return response.data;
    }
    async update(id, updateRepoDto) {
        const config = {
            headers: this.getAuthHeader(),
        };
        const response = await axios_1.default.patch(`${this.baseUrl}/${id}`, updateRepoDto, config);
        return response.data;
    }
    async delete(id) {
        const config = {
            headers: this.getAuthHeader(),
        };
        const response = await axios_1.default.delete(`${this.baseUrl}/${id}`, config);
        return response.data;
    }
    async getReposByAuthor(username) {
        const config = {
            headers: this.getAuthHeader(),
        };
        const response = await axios_1.default.get(`${this.baseUrl}?fields=*.*&filter={"autor":{"_eq":"${username}"}}`, config);
        return response.data;
    }
    async getReposByCollaborator(username) {
        const config = {
            headers: this.getAuthHeader(),
        };
        const response = await axios_1.default.get(`${this.baseUrl}?fields=*.*&filter={"colaboradores":{"_contains":"${username}"}}`, config);
        return response.data;
    }
    async getTimeByProject(id) {
        const config = {
            headers: this.getAuthHeader(),
        };
        const response = await axios_1.default.get(`${this.baseUrl}/${id}?fields=time`, config);
        return response.data;
    }
    async updateTimeByProject(id, updateRepoDto) {
        const config = {
            headers: this.getAuthHeader(),
        };
        const response = await axios_1.default.patch(`${this.baseUrl}/${id}?fields=time`, updateRepoDto, config);
        return response.data;
    }
    async getCollaboratorByRepo(id) {
        const config = {
            headers: this.getAuthHeader(),
        };
        const response = await axios_1.default.get(`${this.baseUrl}/${id}?fields=colaboradores`, config);
        return response.data;
    }
    async updateCollaboratorByRepo(id, updateRepoDto) {
        const config = {
            headers: this.getAuthHeader(),
        };
        const response = await axios_1.default.patch(`${this.baseUrl}/${id}?fields=colaboradores`, updateRepoDto, config);
        return response.data;
    }
    async getClientsByRepo(id) {
        const config = {
            headers: this.getAuthHeader(),
        };
        const response = await axios_1.default.get(`${this.baseUrl}/${id}?fields=cliente`, config);
        return response.data;
    }
    async updateClientByRepo(id, updateRepoDto) {
        const config = {
            headers: this.getAuthHeader(),
        };
        const response = await axios_1.default.patch(`${this.baseUrl}/${id}?fields=cliente`, updateRepoDto, config);
        return response.data;
    }
};
exports.RepoService = RepoService;
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RepoService.prototype, "getClientsByRepo", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_repo_dto_1.UpdateRepoDto]),
    __metadata("design:returntype", Promise)
], RepoService.prototype, "updateClientByRepo", null);
exports.RepoService = RepoService = __decorate([
    (0, common_1.Injectable)()
], RepoService);
//# sourceMappingURL=repo.service.js.map