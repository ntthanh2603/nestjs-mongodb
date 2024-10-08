import { Gender } from "src/helper/help.enum";
export declare class CreateUserDto {
    _id: string;
    name: string;
    email: string;
    password: string;
    age: number;
    gender: Gender;
    address: string;
    role: string;
}
export declare class RegisterUserDto {
    _id: string;
    name: string;
    email: string;
    password: string;
    age: number;
    gender: Gender;
    address: string;
}
