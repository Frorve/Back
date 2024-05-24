import { RepoService } from "../application/repo.service";
import { CreateRepoDto } from "./dto/create-repo.dto";
import { UpdateRepoDto } from "./dto/update-repo.dto";
export declare class RepoController {
    private readonly repoService;
    constructor(repoService: RepoService);
    findAll(): Promise<any>;
    create(createRepoDto: CreateRepoDto): Promise<any>;
    update(id: string, updateRepoDto: UpdateRepoDto): Promise<any>;
    delete(id: string): Promise<any>;
    getReposByAuthor(username: string): Promise<any>;
    getReposByCollaborator(username: string): Promise<any>;
    getTimeByProject(id: string): Promise<any>;
    UpdateTimeByProject(id: string, updateRepoDto: UpdateRepoDto): Promise<any>;
    getCollaboratorByRepo(id: string): Promise<any>;
    UpdateCollaboratorByRepo(id: string, updateRepoDto: UpdateRepoDto): Promise<any>;
    getClientsByRepo(id: string): Promise<any>;
    UpdateClientByRepo(id: string, updateRepoDto: UpdateRepoDto): Promise<any>;
}
