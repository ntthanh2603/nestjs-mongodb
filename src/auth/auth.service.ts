import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { RegisterUserDto } from "src/users/dto/create-user.dto";
import { LoginDto } from "src/users/dto/login.dto";
import { User } from "src/users/schemas/user.schema";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  // Validate user
  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findOneByUserEmail(email);
    if (
      !user ||
      !(await this.usersService.isValidPassword(password, user.password))
    ) {
      throw new UnauthorizedException("Invalid credentials");
    }
    return user;
  }

  // Login user
  async login(dto: LoginDto) {
    const { email, password } = dto;
    const user = await this.validateUser(email, password);
    const { name, role, _id } = user;
    const payload = {
      _id,
      name,
      email,
      role,
    };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  // register user
  async register(user: RegisterUserDto) {
    let newUser = await this.usersService.register(user);

    return {
      _id: newUser?._id,
      createdAt: newUser?.createdAt,
    };
  }
}
