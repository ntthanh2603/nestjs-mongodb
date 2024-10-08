import { AuthService } from "./auth.service";
import { RegisterUserDto } from "src/users/dto/create-user.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    handleLogin(req: any): Promise<{
        access_token: string;
        _id: string;
        name: string;
        email: string;
        role: string;
    }>;
    handleRegister(registerUserDto: RegisterUserDto): Promise<{
        _id: import("mongoose").Types.ObjectId;
        createdAt: Date;
    }>;
}
