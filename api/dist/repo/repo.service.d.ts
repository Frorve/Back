import { Repository } from 'typeorm';
import { Repo } from './repo.entity';
export declare class RepoService {
    private readonly repoRepository;
    constructor(repoRepository: Repository<Repo>);
    createRepo(nombreProyecto: string, descripcion: string, fechaInicio: Date, fechaFinalizacion: Date): Promise<Repo>;
    getAllRepo(): Promise<Repo[]>;
    deleteRepo(id: number): Promise<void>;
}
