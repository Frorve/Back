import { Controller, Get, Param } from "@nestjs/common";
import { StaffRepoService } from "./staff-repo.service";

@Controller("staff-repo")
export class StaffRepoController {
  constructor(private readonly staffRepoService: StaffRepoService) {}

  @Get("staff/:userId/repos")
  async getUserRepos(@Param("userId") userId: number) {
    return this.staffRepoService.getUserRepos(userId);
  }
}
