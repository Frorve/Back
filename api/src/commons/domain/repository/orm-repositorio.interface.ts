import { CreateRepoDto } from "../../../repositorios/infrastructure/dto/create-repo.dto";
import { UpdateRepoDto } from "../../../repositorios/infrastructure/dto/update-repo.dto";
import { Repo } from "../../../repositorios/domain/entities/repo.entity";

export interface IRepoService {
    createRepo(createRepoDto: CreateRepoDto): Promise<Repo>;
    getAllRepoByUsername(username: string): Promise<Repo[]>;
    deleteRepo(id: number): Promise<void>;
    getRepoById(id: number): Promise<Repo | undefined>;
    updateRepo(id: number, updateRepoDto: UpdateRepoDto): Promise<Repo>;
    getReposForCollaborator(username: string): Promise<Repo[]>;

}