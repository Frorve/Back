import { RepoService } from './repo.service';
export declare class RepoController {
    private readonly RepoService;
    constructor(RepoService: RepoService);
    createRepo({ nombreProyecto, descripcion, fechaInicio, fechaFinalizacion }: {
        nombreProyecto: string;
        descripcion: string;
        fechaInicio: Date;
        fechaFinalizacion: Date;
    }): Promise<import("./repo.entity").Repo>;
    getAllRepo(): Promise<import("./repo.entity").Repo[]>;
    deleteRepo(id: number): Promise<void>;
}
