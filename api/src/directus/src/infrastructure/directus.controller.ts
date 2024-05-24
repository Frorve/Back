import { Controller, Post, Body } from "@nestjs/common";
import { ApiTags, ApiBody, ApiResponse } from "@nestjs/swagger";
import { DirectusService } from "../application/directus.service";

@ApiTags("Directus")
@Controller("directus")
export class DirectusController {
  constructor(private readonly directusService: DirectusService) {}

  @Post("token")
  @ApiBody({ description: "Token recibido", type: String })
  @ApiResponse({ status: 200, description: "Token recibido exitosamente" })
  async receiveToken(@Body("token") token: string): Promise<void> {
    console.log("Token received in controller:", token);
    this.directusService.setToken(token);
  }
}
