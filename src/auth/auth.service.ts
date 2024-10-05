import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByUserEmail(email);
    if (user) {
      const isValid = this.usersService.isValidPassword(
        password,
        user.password,
      );
      if (isValid == true) {
        return user;
      }
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      sub: user._id,
      username: user.email,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
