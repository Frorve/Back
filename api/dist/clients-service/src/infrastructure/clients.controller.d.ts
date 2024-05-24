import { ClientsService } from "../application/clients.service";
import { CreateClienteDto } from "./dto/create-cliente.dto";
import { UpdateClienteDto } from "./dto/update-cliente.dto";
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    findAll(): Promise<any>;
    create(createClienteDto: CreateClienteDto): Promise<any>;
    update(id: string, updateClienteDto: UpdateClienteDto): Promise<any>;
    delete(id: string): Promise<any>;
    findAllByName(): Promise<any>;
}
