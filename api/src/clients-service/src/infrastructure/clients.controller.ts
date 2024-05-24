import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Patch,
} from "@nestjs/common";
import { ApiTags, ApiBody, ApiParam, ApiResponse } from "@nestjs/swagger";
import { ClientsService } from "../application/clients.service";
import { CreateClienteDto } from "./dto/create-cliente.dto";
import { UpdateClienteDto } from "./dto/update-cliente.dto";

@ApiTags("Cliente")
@Controller("cliente")
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: "Lista de clientes obtenida exitosamente",
  })
  findAll() {
    return this.clientsService.findAll();
  }

  @Post()
  @ApiBody({ description: "Datos del cliente a crear", type: CreateClienteDto })
  @ApiResponse({ status: 201, description: "Cliente creado exitosamente" })
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientsService.create(createClienteDto);
  }

  @Patch(":id")
  @ApiParam({ name: "id", description: "ID del cliente a actualizar" })
  @ApiBody({
    description: "Datos del cliente a actualizar",
    type: UpdateClienteDto,
  })
  @ApiResponse({ status: 200, description: "Cliente actualizado exitosamente" })
  update(@Param("id") id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientsService.update(id, updateClienteDto);
  }

  @Delete(":id")
  @ApiParam({ name: "id", description: "ID del cliente a eliminar" })
  @ApiResponse({ status: 200, description: "Cliente eliminado exitosamente" })
  delete(@Param("id") id: string) {
    return this.clientsService.delete(id);
  }

  @Get("/name")
  @ApiResponse({
    status: 200,
    description: "Lista de clientes filtrada por nombre obtenida exitosamente",
  })
  findAllByName() {
    return this.clientsService.findAllByName();
  }
}
