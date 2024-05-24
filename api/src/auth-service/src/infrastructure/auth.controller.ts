import { Controller, Post, Body } from "@nestjs/common";
import { ApiTags, ApiBody, ApiResponse } from "@nestjs/swagger";
import { AuthService } from "../application/auth.service";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @ApiBody({ description: "Credenciales de usuario", type: Object })
  @ApiResponse({ status: 200, description: "Inicio de sesión exitoso" })
  @ApiResponse({ status: 400, description: "Credenciales inválidas" })
  login(@Body() credentials: any) {
    return this.authService.login(credentials);
  }

  @Post("register")
  @ApiBody({ description: "Credenciales de usuario", type: Object })
  @ApiResponse({ status: 201, description: "Usuario registrado exitosamente" })
  @ApiResponse({ status: 400, description: "Credenciales inválidas" })
  register(@Body() credentials: any) {
    return this.authService.register(credentials);
  }
}
