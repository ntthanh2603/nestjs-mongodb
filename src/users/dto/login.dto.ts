import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class LoginDto {
  @IsEmail()
  @ApiProperty({
    description: "Email user",
    example: "tuanthanh2kk4@gmail.com",
  })
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(30)
  @ApiProperty({
    description: "Password user",
    example: "12345678",
  })
  password: string;
}
