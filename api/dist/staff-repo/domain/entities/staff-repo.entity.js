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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffRepo = void 0;
const typeorm_1 = require("typeorm");
const staff_entity_1 = require("../../../users/domain/entities/staff.entity");
const repo_entity_1 = require("../../../repositorios/domain/entities/repo.entity");
let StaffRepo = class StaffRepo {
};
exports.StaffRepo = StaffRepo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StaffRepo.prototype, "staff_id", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StaffRepo.prototype, "repo_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => staff_entity_1.Staff),
    (0, typeorm_1.JoinColumn)({ name: "staffId" }),
    __metadata("design:type", staff_entity_1.Staff)
], StaffRepo.prototype, "staff", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => repo_entity_1.Repo),
    (0, typeorm_1.JoinColumn)({ name: "repoId" }),
    __metadata("design:type", repo_entity_1.Repo)
], StaffRepo.prototype, "repo", void 0);
exports.StaffRepo = StaffRepo = __decorate([
    (0, typeorm_1.Entity)()
], StaffRepo);
//# sourceMappingURL=staff-repo.entity.js.map