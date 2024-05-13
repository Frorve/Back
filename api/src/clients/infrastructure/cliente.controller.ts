import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
} from "@nestjs/common";
import { ClienteService } from "../application/cliente.service";
import { CreateClienteDto } from "./dto/create-cliente.dto";
import { UpdateClienteDto } from "./dto/update-cliente.dto";
import {
  ApiTags,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiParam,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from "@nestjs/swagger";

@ApiTags("Clientes")
@Controller("cliente")
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  @ApiOperation({ summary: "Crear un cliente nuevo" })
  @ApiCreatedResponse({ description: "Cliente creado correctamente" })
  @ApiBadRequestResponse({ description: "Datos de entrada inválidos" })
  async create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @Put(":id")
  @ApiOperation({ summary: "Actualizar un cliente" })
  @ApiOkResponse({ description: "Cliente actualizado correctamente" })
  @ApiBadRequestResponse({ description: "Datos de entrada inválidos" })
  @ApiNotFoundResponse({ description: "Cliente no encontrado" })
  @ApiParam({
    name: "id",
    description: "ID del cliente a actualizar",
    type: "string",
  })
  async update(
    @Param("id") id: string,
    @Body() updateClienteDto: UpdateClienteDto
  ) {
    return this.clienteService.update(+id, updateClienteDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Eliminar un cliente" })
  @ApiOkResponse({ description: "Cliente eliminado correctamente" })
  @ApiNotFoundResponse({ description: "Cliente no encontrado" })
  @ApiParam({
    name: "id",
    description: "ID del cliente a eliminar",
    type: "string",
  })
  async delete(@Param("id") id: string) {
    return this.clienteService.delete(+id);
  }

  @Get("/all")
  @ApiOperation({ summary: "Obtener todos los clientes" })
  @ApiOkResponse({
    description: "Lista de todos los clientes",
    type: [CreateClienteDto],
  })
  async findAll() {
    return this.clienteService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Obtener un cliente por ID" })
  @ApiOkResponse({ description: "Cliente encontrado", type: CreateClienteDto })
  @ApiNotFoundResponse({ description: "Cliente no encontrado" })
  @ApiParam({
    name: "id",
    description: "ID del cliente a buscar",
    type: "string",
  })
  async findOne(@Param("id") id: string) {
    return this.clienteService.findOne(+id);
  }
}
