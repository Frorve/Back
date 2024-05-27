import { Controller, Post, Body } from "@nestjs/common";
import { ApiTags, ApiBody, ApiResponse } from "@nestjs/swagger";
import { DirectusService } from "../application/directus.service";
import { GlobalService } from "../application/global.service";

@ApiTags("Directus")
@Controller("directus")
export class DirectusController {
  constructor(private readonly directusService: DirectusService) {}

  @Post("token")
  @ApiBody({ description: "Token recibido", type: String })
  @ApiResponse({ status: 200, description: "Token recibido exitosamente" })
  async login(@Body() body: { token: string }) {
    const token = body.token;
    GlobalService.token = token;
    return { message: 'Token set successfully' };
  }
}

