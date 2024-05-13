import { Repository } from "typeorm";
import { Repo } from "../domain/entities/repo.entity";
import { CreateRepoDto } from "../infrastructure/dto/create-repo.dto";
import { UpdateRepoDto } from "../infrastructure/dto/update-repo.dto";
export declare class RepoService {
    private readonly repoRepository;
    constructor(repoRepository: Repository<Repo>);
    createRepo(createRepoDto: CreateRepoDto, username: string, archivo?: Express.Multer.File): Promise<Repo>;
    getAllRepoByUsername(username: string): Promise<Repo[]>;
    deleteRepo(id: number): Promise<void>;
    getRepoById(id: number): Promise<Repo | undefined>;
    updateRepo(id: number, updateRepoDto: UpdateRepoDto): Promise<Repo>;
    getReposForCollaborator(username: string): Promise<Repo[]>;
    getCollaboratorsByProjectId(projectId: number): Promise<string[]>;
    getClientsByProjectId(projectId: number): Promise<string[]>;
    updateTimeEntry(id: number, UpdateRepoDto: {
        time: number;
    }): Promise<Repo>;
    getTimeEntry(id: number): Promise<number>;
}
