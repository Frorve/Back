import { CreateUserDto } from "../infrastructure/dto/create-user.dto";
export declare class UserService {
    private readonly baseUrl;
    findAll(): Promise<any>;
    findMe(): Promise<any>;
    create(createUserDto: CreateUserDto): Promise<any>;
}
