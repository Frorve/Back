import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Staff } from "../staff/staff.entity";
import { Repo } from "../repo/repo.entity";

@Entity()
export class StaffRepo {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Staff, (staff) => staff.staffRepos)
  @JoinColumn({ name: "staffId" })
  staff: Staff;

  @ManyToOne(() => Repo, (repo) => repo.Reposstaff)
  @JoinColumn({ name: "repoId" })
  repo: Repo;
}
