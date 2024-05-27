import { CreateClienteDto } from '.././infrastructure/dto/create-cliente.dto';
import { UpdateClienteDto } from '.././infrastructure/dto/update-cliente.dto';
export declare class ClientsService {
    private readonly baseUrl;
    private getAuthHeader;
    findAll(): Promise<any>;
    create(createClienteDto: CreateClienteDto): Promise<any>;
    update(id: string, updateClienteDto: UpdateClienteDto): Promise<any>;
    delete(id: string): Promise<any>;
    findAllByName(): Promise<any>;
}
