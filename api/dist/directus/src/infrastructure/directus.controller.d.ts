import { DirectusService } from "../application/directus.service";
export declare class DirectusController {
    private readonly directusService;
    constructor(directusService: DirectusService);
    receiveToken(token: string): Promise<void>;
}
