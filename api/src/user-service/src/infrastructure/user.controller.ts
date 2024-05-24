import { Controller, Get, Post, Body } from "@nestjs/common";
import { ApiTags, ApiBody, ApiResponse } from "@nestjs/swagger";
import { UserService } from "../application/user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@ApiTags("Users")
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: "Lista de usuarios obtenida exitosamente",
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get("me")
  @ApiResponse({
    status: 200,
    description: "Información del usuario obtenida exitosamente",
  })
  findMe() {
    return this.userService.findMe();
  }

  @Post()
  @ApiBody({ description: "Datos del usuario a crear", type: CreateUserDto })
  @ApiResponse({ status: 201, description: "Usuario creado exitosamente" })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
