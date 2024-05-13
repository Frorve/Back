import { RepoService } from "../application/repo.service";
import { Repo } from "../domain/entities/repo.entity";
import { CreateRepoDto } from "./dto/create-repo.dto";
import { UpdateRepoDto } from "./dto/update-repo.dto";
import { Response } from "express";
export declare class RepoController {
    private repoService;
    constructor(repoService: RepoService);
    createRepo(createRepoDto: CreateRepoDto, archivo: Express.Multer.File, username: string): Promise<Repo>;
    downloadFile(id: number, res: Response): Promise<any>;
    getAllRepo(username: string): Promise<Repo[]>;
    getRepoById(id: number): Promise<Repo>;
    updateRepo(id: string, archivo: Express.Multer.File, updateRepoDto: UpdateRepoDto): Promise<Repo>;
    deleteRepo(id: string): Promise<void>;
    getCollaboratorRepos(username: string): Promise<Repo[]>;
    getCollaboratorsByProjectId(projectId: number): Promise<string[]>;
    getClientsByProjectId(projectId: number): Promise<string[]>;
    updateTimeEntry(id: number, UpdateRepoDto: {
        time: number;
    }): Promise<Repo>;
    getTimeEntry(id: number): Promise<number>;
}
