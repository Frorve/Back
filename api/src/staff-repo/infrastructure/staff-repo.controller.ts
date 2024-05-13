import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { StaffRepoService } from "../application/staff-repo.service";
import { StaffRepo } from "../domain/entities/staff-repo.entity";
import { StaffRepoDto } from "./dto/create-repo-staff.dto";
import { ApiTags, ApiBody, ApiParam, ApiResponse, ApiNotFoundResponse, ApiBadRequestResponse, ApiOkResponse, ApiCreatedResponse, ApiOperation } from "@nestjs/swagger";

@ApiTags('Staff Repos')
@Controller("staff-repo")
export class StaffRepoController {
  constructor(private readonly staffRepoService: StaffRepoService) {}

  @Post()
  @ApiOperation({ summary: "Crear relacion de personal con repositorio" })
  @ApiCreatedResponse({ description: 'Relación de personal y repositorio creada correctamente' }) 
  @ApiBody({ type: StaffRepoDto })
  async create(
    @Body() staffProjectDto: StaffRepoDto
  ): Promise<StaffRepo> {
    return this.staffRepoService.create(staffProjectDto);
  }

  @Get("staff/:staffId")
  @ApiOperation({ summary: "Obtener el staff por ID" })
  @ApiParam({ name: 'staffId', description: 'ID del personal', type: 'string' })
  @ApiOkResponse({ description: 'Relaciones de personal encontradas', type: [StaffRepo] })
  async findByStaffId(
    @Param("staffId") staffId: string
  ): Promise<StaffRepo[]> {
    const parsedStaffId = parseInt(staffId, 10);
    return this.staffRepoService.findByStaffId(parsedStaffId);
  }

  @Get("project/:repoId")
  @ApiOperation({ summary: "Obtener los proyectos por ID" })
  @ApiParam({ name: 'repoId', description: 'ID del repositorio', type: 'string' })
  @ApiOkResponse({ description: 'Relaciones de personal encontradas', type: [StaffRepo] })
  async findByrepoId(
    @Param("repoId") repoId: string
  ): Promise<StaffRepo[]> {
    const parsedRepoId = parseInt(repoId, 10);
    return this.staffRepoService.findByrepoId(parsedRepoId);
  }

  @Delete("project/:repoId")
  @ApiOperation({ summary: "Eliminar proyecto por ID" })
  @ApiParam({ name: 'repoId', description: 'ID del repositorio', type: 'number' })
  @ApiOkResponse({ description: 'Relaciones de personal eliminadas correctamente' })
  @ApiNotFoundResponse({ description: 'Repositorio no encontrado' })
  async removeByrepoId(
    @Param("repoId") repoId: number
  ): Promise<void> {
    return this.staffRepoService.removeByrepoId(+repoId);
  }

  @Get("project/:repoId/users")
  @ApiOperation({ summary: "Obtener los usuarios que tiene asociado cada proyecto" })
  @ApiParam({ name: 'repoId', description: 'ID del repositorio', type: 'number' })
  @ApiOkResponse({ description: 'Usuarios encontrados', type: [String] })
  async findUsersByrepoId(
    @Param("repoId") repoId: number
  ): Promise<string[]> {
    try {
      const members = await this.staffRepoService.findByrepoId(repoId);

      const usernames = await Promise.all(
        members.map(async (member) => {
          const user = await this.staffRepoService.findUserById(
            member.staff_id
          );
          return user ? user.username : null;
        })
      );

      return usernames.filter((username) => username !== null);
    } catch (error) {
      console.error("Error fetching users by project ID:", error.message);
      throw new Error("Failed to fetch users");
    }
  }

  @Get(":staffId/:repoId")
  @ApiOperation({ summary: "Obtener un usario y que proyectos tiene relacionados" })
  @ApiParam({ name: 'staffId', description: 'ID del personal', type: 'number' })
  @ApiParam({ name: 'repoId', description: 'ID del repositorio', type: 'number' })
  @ApiOkResponse({ description: 'Relación de personal encontrada', type: StaffRepo })
  async findOne(
    @Param("staffId") staffId: number,
    @Param("repoId") repoId: number
  ): Promise<StaffRepo> {
    return this.staffRepoService.findOne(+staffId, +repoId);
  }

  @Get()
  @ApiOperation({ summary: "Obtener todos los proyectos y sus correspondientes usuarios" })
  @ApiOkResponse({ description: 'Todas las relaciones de personal y repositorio encontradas', type: [StaffRepo] })
  async findAll(): Promise<StaffRepo[]> {
    return this.staffRepoService.findAll();
  }

  @Put(":staffId/:repoId")
  @ApiOperation({ summary: "Actualizar el proyecto" })
  @ApiParam({ name: 'staffId', description: 'ID del personal', type: 'number' })
  @ApiParam({ name: 'repoId', description: 'ID del repositorio', type: 'number' })
  @ApiOkResponse({ description: 'Relación de personal y repositorio actualizada correctamente' })
  @ApiBadRequestResponse({ description: 'Datos de entrada inválidos' })
  async update(
    @Param("staffId") staffId: number,
    @Param("repoId") repoId: number,
    @Body() staffProjectDto: StaffRepoDto
  ): Promise<StaffRepo> {
    return this.staffRepoService.update(
      +staffId,
      +repoId,
      staffProjectDto
    );
  }

  @Delete(":staffId/:repoId")
  @ApiOperation({ summary: "Eliminar el proyecto" })
  @ApiParam({ name: 'staffId', description: 'ID del personal', type: 'number' })
  @ApiParam({ name: 'repoId', description: 'ID del repositorio', type: 'number' })
  @ApiOkResponse({ description: 'Relación de personal y repositorio eliminada correctamente' })
  async remove(
    @Param("staffId") staffId: number,
    @Param("repoId") repoId: number
  ): Promise<void> {
    return this.staffRepoService.remove(+staffId, +repoId);
  }

  @Get("repo/:username")
  @ApiOperation({ summary: "Obtener los proyectos de un usuario" })
  @ApiParam({ name: 'username', description: 'Nombre de usuario', type: 'string' })
  @ApiOkResponse({ description: 'Relaciones de personal y repositorio encontradas', type: [StaffRepo] })
  async findByUsername(
    @Param("username") username: string
  ): Promise<StaffRepo[]> {
    return this.staffRepoService.findByUsername(username);
  }
}
