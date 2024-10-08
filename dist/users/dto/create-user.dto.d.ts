import mongoose from "mongoose";
import { Gender } from "src/helper/help.enum";
declare class Company {
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
}
export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    age: number;
    gender: Gender;
    address: string;
    role: string;
    company: Company;
}
export declare class RegisterUserDto {
    name: string;
    email: string;
    password: string;
    age: number;
    gender: Gender;
    address: string;
}
export {};
