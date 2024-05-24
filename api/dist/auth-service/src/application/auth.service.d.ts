export declare class AuthService {
    private accessToken;
    private readonly baseUrl;
    private readonly baseUrlReg;
    login(credentials: any): Promise<any>;
    register(credentials: any): Promise<any>;
    getToke(): string;
}
