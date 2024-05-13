import { Repository } from 'typeorm';
import { Cliente } from '../domain/entities/cliente.entity';
import { CreateClienteDto } from '../infrastructure/dto/create-cliente.dto';
import { UpdateClienteDto } from '../infrastructure/dto/update-cliente.dto';
export declare class ClienteService {
    private readonly clienteRepository;
    constructor(clienteRepository: Repository<Cliente>);
    create(createClienteDto: CreateClienteDto): Promise<Cliente>;
    update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Cliente[]>;
    findOne(id: number): Promise<Cliente>;
}
