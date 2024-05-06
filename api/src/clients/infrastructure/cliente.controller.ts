import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { ClienteService } from '../application/cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  async create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.clienteService.delete(+id);
  }

  @Get("/all")
  async findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.clienteService.findOne(+id);
  }
}
