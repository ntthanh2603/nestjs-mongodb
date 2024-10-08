import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
import { IsOptional } from "class-validator";
import { Gender } from "src/helper/help.enum";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  name?: string;

  @IsOptional() email?: string;

  @IsOptional()
  age?: number;

  @IsOptional()
  gender?: Gender;

  @IsOptional()
  address?: string;

  @IsOptional()
  role?: string;
}
