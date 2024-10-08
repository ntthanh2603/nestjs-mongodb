import { JwtService } from "@nestjs/jwt";
import { RegisterUserDto } from "src/users/dto/create-user.dto";
import { IUser } from "src/users/users.interface";
import { UsersService } from "src/users/users.service";
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: IUser): Promise<{
        access_token: string;
        _id: string;
        name: string;
        email: string;
        role: string;
    }>;
    register(user: RegisterUserDto): Promise<{
        _id: import("mongoose").Types.ObjectId;
        createdAt: Date;
    }>;
}
