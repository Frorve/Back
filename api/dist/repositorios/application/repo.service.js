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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const repo_entity_1 = require("../domain/entities/repo.entity");
let RepoService = class RepoService {
    constructor(repoRepository) {
        this.repoRepository = repoRepository;
    }
    async createRepo(createRepoDto, username, archivo) {
        const { nombreProyecto, descripcion, fechaInicio, fechaFinalizacion, colaboradores, cliente, nombreArchivo, } = createRepoDto;
        const repo = new repo_entity_1.Repo();
        repo.nombreProyecto = nombreProyecto;
        repo.descripcion = descripcion;
        repo.fechaInicio = fechaInicio;
        repo.fechaFinalizacion = fechaFinalizacion;
        repo.autor = username;
        repo.colaboradores = colaboradores;
        repo.cliente = cliente;
        repo.nombreArchivo = nombreArchivo;
        if (archivo) {
            repo.archivo = archivo.buffer;
        }
        const savedRepo = await this.repoRepository.save(repo);
        return savedRepo;
    }
    async getAllRepoByUsername(username) {
        return this.repoRepository.find({ where: { autor: username } });
    }
    async deleteRepo(id) {
        await this.repoRepository.delete(id);
    }
    async getRepoById(id) {
        const options = { where: { id } };
        return this.repoRepository.findOne(options);
    }
    async updateRepo(id, updateRepoDto) {
        const { nombreProyecto, descripcion, fechaFinalizacion, colaboradores, cliente, archivo, nombreArchivo, } = updateRepoDto;
        const buscar = { where: { id } };
        const repo = await this.repoRepository.findOne(buscar);
        if (!repo) {
            throw new Error(`Repo with id ${id} not found`);
        }
        repo.nombreProyecto = nombreProyecto || repo.nombreProyecto;
        repo.descripcion = descripcion || repo.descripcion;
        repo.fechaFinalizacion = fechaFinalizacion || repo.fechaFinalizacion;
        repo.colaboradores = colaboradores || repo.colaboradores;
        repo.cliente = cliente || repo.cliente;
        repo.nombreArchivo = nombreArchivo || repo.nombreArchivo;
        if (archivo) {
            repo.archivo = archivo.buffer;
        }
        return this.repoRepository.save(repo);
    }
    async getReposForCollaborator(username) {
        return this.repoRepository.find({
            where: [{ colaboradores: (0, typeorm_2.Like)(`%${username}%`) }],
        });
    }
    async getCollaboratorsByProjectId(projectId) {
        const repo = await this.repoRepository.findOne({
            where: { id: projectId },
        });
        if (!repo) {
            throw new common_1.NotFoundException(`Repo with id ${projectId} not found`);
        }
        if (!repo.colaboradores) {
            return [];
        }
        return repo.colaboradores.split(",");
    }
    async getClientsByProjectId(projectId) {
        const repo = await this.repoRepository.findOne({
            where: { id: projectId },
        });
        if (!repo) {
            throw new common_1.NotFoundException(`Repo with id ${projectId} not found`);
        }
        if (!repo.cliente) {
            return [];
        }
        return repo.cliente.split(",");
    }
    async updateTimeEntry(id, UpdateRepoDto) {
        const { time } = UpdateRepoDto;
        const buscar = { where: { id } };
        const repo = await this.repoRepository.findOne(buscar);
        if (!repo) {
            throw new common_1.NotFoundException(`Repo with id ${id} not found`);
        }
        repo.time = time;
        return this.repoRepository.save(repo);
    }
    async getTimeEntry(id) {
        const buscar = { where: { id } };
        const repo = await this.repoRepository.findOne(buscar);
        if (!repo) {
            throw new common_1.NotFoundException(`Repo with id ${id} not found`);
        }
        return repo.time;
    }
};
exports.RepoService = RepoService;
exports.RepoService = RepoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(repo_entity_1.Repo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RepoService);
//# sourceMappingURL=repo.service.js.map