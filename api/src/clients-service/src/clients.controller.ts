import { Controller, Get, Post, Put, Param, Body, Delete, Patch } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('cliente')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientsService.create(createClienteDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientsService.update(id, updateClienteDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.clientsService.delete(id);
  }

  @Get('/name')
  findAllByName() {
    return this.clientsService.findAllByName();
  }

}
