import {
    IsNotEmpty,
    IsNumber,
} from "class-validator";

export class StaffRepoDto {
    @IsNumber()
    @IsNotEmpty()
    staff_id: number;

    @IsNumber()
    @IsNotEmpty()
    repo_id: number;
}
