import { DirectusService } from "../application/directus.service";
export declare class DirectusController {
    private readonly directusService;
    constructor(directusService: DirectusService);
    login(body: {
        token: string;
    }): Promise<{
        message: string;
    }>;
}
