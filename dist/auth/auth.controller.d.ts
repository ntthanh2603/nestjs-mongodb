import { AuthService } from "./auth.service";
import { RegisterUserDto } from "src/users/dto/create-user.dto";
import { LoginDto } from "src/users/dto/login.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    handleLogin(dto: LoginDto): Promise<{
        token: string;
    }>;
    handleRegister(registerUserDto: RegisterUserDto): Promise<{
        _id: string;
        createdAt: Date;
    }>;
}
