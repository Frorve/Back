import { CreateRepoDto } from '../infrastructure/dto/create-repo.dto';
import { UpdateRepoDto } from '../infrastructure/dto/update-repo.dto';
export declare class RepoService {
    private readonly baseUrl;
    private getAuthHeader;
    findAll(): Promise<any>;
    create(createRepoDto: CreateRepoDto): Promise<any>;
    update(id: string, updateRepoDto: UpdateRepoDto): Promise<any>;
    delete(id: string): Promise<any>;
    getReposByAuthor(username: string): Promise<any>;
    getReposByCollaborator(username: string): Promise<any>;
    getTimeByProject(id: string): Promise<any>;
    updateTimeByProject(id: string, updateRepoDto: UpdateRepoDto): Promise<any>;
    getCollaboratorByRepo(id: string): Promise<any>;
    updateCollaboratorByRepo(id: string, updateRepoDto: UpdateRepoDto): Promise<any>;
    getClientsByRepo(id: string): Promise<any>;
    updateClientByRepo(id: string, updateRepoDto: UpdateRepoDto): Promise<any>;
}
