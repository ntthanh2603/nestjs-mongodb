import { AuthService } from "./auth.service";
import { RegisterUserDto } from "src/users/dto/create-user.dto";
import { LoginDto } from "src/users/dto/login.dto";
import { Request, Response } from "express";
import { IUser } from "src/users/users.interface";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    handleLogin(dto: LoginDto, response: Response): Promise<{
        access_token: string;
        user: {
            _id: string;
            name: string;
            email: string;
            role: string;
        };
    }>;
    handleRegister(registerUserDto: RegisterUserDto): Promise<{
        _id: string;
        createdAt: Date;
    }>;
    handleGetAccount(user: IUser): IUser;
    handleRefreshToken(request: Request, response: Response): Promise<{
        access_token: string;
        user: {
            _id: string;
            name: string;
            email: string;
            role: string;
        };
    }>;
    hendleLogout(response: Response, user: IUser): Promise<string>;
}
