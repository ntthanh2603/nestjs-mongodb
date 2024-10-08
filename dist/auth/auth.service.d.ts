import { JwtService } from "@nestjs/jwt";
import { RegisterUserDto } from "src/users/dto/create-user.dto";
import { LoginDto } from "src/users/dto/login.dto";
import { User } from "src/users/schemas/user.schema";
import { UsersService } from "src/users/users.service";
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<User>;
    login(dto: LoginDto): Promise<{
        token: string;
    }>;
    register(user: RegisterUserDto): Promise<{
        _id: string;
        createdAt: Date;
    }>;
}
