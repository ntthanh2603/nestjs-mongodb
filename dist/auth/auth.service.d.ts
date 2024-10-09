import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { RegisterUserDto } from "src/users/dto/create-user.dto";
import { LoginDto } from "src/users/dto/login.dto";
import { User } from "src/users/schemas/user.schema";
import { UsersService } from "src/users/users.service";
import { Response } from "express";
import { IUser } from "src/users/users.interface";
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    validateUser(email: string, password: string): Promise<User>;
    login(dto: LoginDto, response: Response): Promise<{
        access_token: string;
        user: {
            _id: string;
            name: string;
            email: string;
            role: string;
        };
    }>;
    register(user: RegisterUserDto): Promise<{
        _id: string;
        createdAt: Date;
    }>;
    createRefreshToken: (payload: any) => string;
    processNewToken: (refreshToken: string, response: Response) => Promise<{
        access_token: string;
        user: {
            _id: string;
            name: string;
            email: string;
            role: string;
        };
    }>;
    logout: (response: Response, user: IUser) => Promise<string>;
}
