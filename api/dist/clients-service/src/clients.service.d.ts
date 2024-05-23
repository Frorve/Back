import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClientsService {
    private readonly baseUrl;
    findAll(): Promise<any>;
    create(createClienteDto: CreateClienteDto): Promise<any>;
    update(id: string, updateClienteDto: UpdateClienteDto): Promise<any>;
    delete(id: string): Promise<any>;
    findAllByName(): Promise<any>;
}
