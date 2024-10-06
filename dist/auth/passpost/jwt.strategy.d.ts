import { Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { UsersService } from "src/users/users.service";
import { IUser } from "src/users/users.interface";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private usersService;
    constructor(configService: ConfigService, usersService: UsersService);
    validate(payload: IUser): Promise<{
        _id: string;
        name: string;
        email: string;
        role: string;
    }>;
}
export {};
