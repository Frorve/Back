import { ClienteService } from "../application/cliente.service";
import { CreateClienteDto } from "./dto/create-cliente.dto";
import { UpdateClienteDto } from "./dto/update-cliente.dto";
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    create(createClienteDto: CreateClienteDto): Promise<import("../domain/entities/cliente.entity").Cliente>;
    update(id: string, updateClienteDto: UpdateClienteDto): Promise<import("../domain/entities/cliente.entity").Cliente>;
    delete(id: string): Promise<void>;
    findAll(): Promise<import("../domain/entities/cliente.entity").Cliente[]>;
    findOne(id: string): Promise<import("../domain/entities/cliente.entity").Cliente>;
}
