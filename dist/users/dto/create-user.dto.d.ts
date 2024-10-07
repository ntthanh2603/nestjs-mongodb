import mongoose from "mongoose";
declare class Company {
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
}
export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    age: string;
    gender: string;
    address: string;
    role: string;
    company: Company;
}
export declare class RegisterUserDto {
    name: string;
    email: string;
    password: string;
    age: string;
    gender: string;
    address: string;
}
export {};
