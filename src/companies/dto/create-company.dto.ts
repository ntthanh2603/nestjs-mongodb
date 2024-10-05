import { IsNotEmpty } from "class-validator";

export class CreateCompanyDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  description: string;
}