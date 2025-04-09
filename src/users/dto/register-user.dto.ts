import { Type } from "class-transformer";
import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Gender } from "src/helper/help.enum";

export class RegisterUserDto {
  @ApiProperty({
    description: "Name of user",
    example: "Nguyen Van A",
  })
  @IsNotEmpty({ message: "Name not empty" })
  name: string;

  @ApiProperty({
    description: "Email user",
    example: "tuanthanh2kk4@gmail.com",
  })
  @IsEmail({}, { message: "Email is not in correct format" })
  @IsNotEmpty({ message: "Email not empty" })
  email: string;

  @ApiProperty({
    description: "Password user",
    example: "12345678",
  })
  @IsNotEmpty({ message: "Password not empty" })
  password: string;

  @ApiProperty({
    description: "Year old of user",
    example: 25,
  })
  @IsNotEmpty({ message: "Age not empty" })
  age: number;

  @ApiProperty({
    description: "Gender of user",
    enum: Gender,
    example: Gender.MALE,
  })
  @IsNotEmpty({ message: "Gender not empty" })
  @IsEnum(Gender, {
    message: "Invalid gender: male, female, other",
  })
  gender: Gender;

  @ApiProperty({
    description: "Address of user",
    example: "123 Nguyễn Huệ, Quận 1, TP.HCM",
  })
  @IsNotEmpty({ message: "Address not empty" })
  address: string;
}
