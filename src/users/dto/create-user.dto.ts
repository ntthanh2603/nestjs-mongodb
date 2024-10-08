import { Type } from "class-transformer";
import {
  IsEmail,
  IsEnum,
  isNotEmpty,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  ValidateNested,
} from "class-validator";
import mongoose from "mongoose";
import { Gender } from "src/helper/help.enum";

export class CreateUserDto {
  _id: string;

  @IsNotEmpty({ message: "Name not empty" })
  name: string;

  @IsEmail({}, { message: "Email is not in correct format" })
  @IsNotEmpty({ message: "Email not empty" })
  email: string;

  @IsNotEmpty({ message: "Password not empty" })
  password: string;

  @IsNotEmpty({ message: "Age not empty" })
  age: number;

  @IsNotEmpty({ message: "Gender not empty" })
  @IsEnum(Gender, {
    message: "Invalid gender: 0 (Male), 1 (Female), 2 (Other)",
  })
  gender: Gender;

  @IsNotEmpty({ message: "Address not empty" })
  address: string;

  @IsNotEmpty({ message: "Role not empty" })
  role: string;
}

export class RegisterUserDto {
  @IsOptional()
  _id: string;

  @IsNotEmpty({ message: "Name not empty" })
  name: string;

  @IsEmail({}, { message: "Email is not in correct format" })
  @IsNotEmpty({ message: "Email not empty" })
  email: string;

  @IsNotEmpty({ message: "Password not empty" })
  password: string;

  @IsNotEmpty({ message: "Age not empty" })
  age: number;

  @IsNotEmpty({ message: "Gender not empty" })
  @IsEnum(Gender, {
    message: "Invalid gender: 0 (Male), 1 (Female), 2 (Other)",
  })
  gender: Gender;

  @IsNotEmpty({ message: "Address not empty" })
  address: string;
}
