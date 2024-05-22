import { RepoService } from './repo.service';
export declare class RepoController {
    private readonly repoService;
    constructor(repoService: RepoService);
    findAll(): Promise<any>;
}
