import { IsNotEmpty } from "class-validator";

export class CreateCompanyDto {
  @IsNotEmpty({message: "Email not null"})
  email: string;

  @IsNotEmpty({message: "Address not null"})
  address: string;

  @IsNotEmpty({message: "Desscription not null"})
  description: string;
}