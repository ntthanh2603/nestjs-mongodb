import { PartialType } from "@nestjs/mapped-types";
import { IsOptional } from "class-validator";
import { Gender } from "src/helper/help.enum";

export class UpdateUserDto {
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
