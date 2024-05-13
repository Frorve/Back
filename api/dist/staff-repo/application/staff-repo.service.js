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
exports.StaffRepoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const staff_repo_entity_1 = require("../domain/entities/staff-repo.entity");
let StaffRepoService = class StaffRepoService {
    constructor(staffRepoRepository) {
        this.staffRepoRepository = staffRepoRepository;
    }
    async create(staffRepoDto) {
        const staffProject = this.staffRepoRepository.create(staffRepoDto);
        return this.staffRepoRepository.save(staffProject);
    }
    async findAll() {
        return this.staffRepoRepository.find();
    }
    async findOne(staffId, repoId) {
        return this.staffRepoRepository.findOne({
            where: { staff_id: staffId, repo_id: repoId },
        });
    }
    async findByStaffId(staffId) {
        return this.staffRepoRepository.find({ where: { staff_id: staffId } });
    }
    async findByrepoId(repoId) {
        return this.staffRepoRepository.find({ where: { repo_id: repoId } });
    }
    async update(staffId, repoId, staffRepoDto) {
        await this.staffRepoRepository.update({ staff_id: staffId, repo_id: repoId }, staffRepoDto);
        return this.findOne(staffId, repoId);
    }
    async remove(staffId, repoId) {
        await this.staffRepoRepository.delete({
            staff_id: staffId,
            repo_id: repoId,
        });
    }
    async removeByrepoId(repoId) {
        await this.staffRepoRepository.delete({ repo_id: repoId });
    }
    async findUserById(userId) {
        const user = await this.staffRepoRepository.query(`SELECT nombre FROM staff_repo WHERE staff_id = $1`, [userId]);
        return user[0] || null;
    }
    async findByUsername(username) {
        return this.staffRepoRepository
            .createQueryBuilder("staff_repo")
            .leftJoinAndSelect("staff_repo.staff", "staff")
            .leftJoinAndSelect("staff_repo.repo", "repo")
            .where("staff.nombre = :username", { username })
            .getMany();
    }
};
exports.StaffRepoService = StaffRepoService;
exports.StaffRepoService = StaffRepoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(staff_repo_entity_1.StaffRepo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StaffRepoService);
//# sourceMappingURL=staff-repo.service.js.map