import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { StaffRepoService } from "./staff-repo.service";
import { StaffRepo } from "./staff-repo.entity";
import { StaffRepoDto } from "../dto/create-repo-staff.dto"

@Controller("staff-repo")
export class StaffRepoController {
  constructor(private readonly staffRepoService: StaffRepoService) {}

  @Post()
  async create(
    @Body() staffProjectDto: StaffRepoDto
  ): Promise<StaffRepo> {
    return this.staffRepoService.create(staffProjectDto);
  }

  @Get("staff/:staffId")
  async findByStaffId(
    @Param("staffId") staffId: string
  ): Promise<StaffRepo[]> {
    const parsedStaffId = parseInt(staffId, 10);
    return this.staffRepoService.findByStaffId(parsedStaffId);
  }

  @Get("project/:repoId")
  async findByrepoId(
    @Param("repoId") repoId: string
  ): Promise<StaffRepo[]> {
    const parsedRepoId = parseInt(repoId, 10);
    return this.staffRepoService.findByrepoId(parsedRepoId);
  }

  @Delete("project/:repoId")
  async removeByrepoId(
    @Param("repoId") repoId: number
  ): Promise<void> {
    return this.staffRepoService.removeByrepoId(+repoId);
  }

  @Get("project/:repoId/users")
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
  async findOne(
    @Param("staffId") staffId: number,
    @Param("repoId") repoId: number
  ): Promise<StaffRepo> {
    return this.staffRepoService.findOne(+staffId, +repoId);
  }

  @Get()
  async findAll(): Promise<StaffRepo[]> {
    return this.staffRepoService.findAll();
  }

  @Put(":staffId/:repoId")
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
  async remove(
    @Param("staffId") staffId: number,
    @Param("repoId") repoId: number
  ): Promise<void> {
    return this.staffRepoService.remove(+staffId, +repoId);
  }

  @Get("repo/:username") // Cambia la ruta para recibir el nombre de usuario
  async findByUsername(
    @Param("username") username: string
  ): Promise<StaffRepo[]> {
    return this.staffRepoService.findByUsername(username);
  }
}
