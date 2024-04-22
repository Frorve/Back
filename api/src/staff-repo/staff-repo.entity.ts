import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Staff } from "../staff/staff.entity";
import { Repo } from "../repo/repo.entity";

@Entity()
export class StaffRepo {
  @PrimaryGeneratedColumn()
  staff_id: number;

  @PrimaryGeneratedColumn()
  repo_id: number;

  @ManyToOne(() => Staff)
  @JoinColumn({ name: "staffId" })
  staff: Staff;

  @ManyToOne(() => Repo)
  @JoinColumn({ name: "repoId" })
  repo: Repo;
}
