import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { IUser } from "src/users/users.interface";
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

  async login(user: IUser) {
    const { _id, name, email, role } = user;
    const payload = {
        sub: "token login",
        iss: "from server",
        _id,
        name,
        email,
        role
    };
    return {
        access_token: this.jwtService.sign(payload),
        _id,
        name,
        email,
        role
    };
  }
}
