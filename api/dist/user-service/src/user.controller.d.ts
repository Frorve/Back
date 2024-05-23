import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<any>;
    findMe(): Promise<any>;
    create(createUserDto: CreateUserDto): Promise<any>;
}
