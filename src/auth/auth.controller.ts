import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Public, ResponseMessage } from "src/decorator/customize";
import { RegisterUserDto } from "src/users/dto/create-user.dto";
import { LoginDto } from "src/users/dto/login.dto";

@Controller("/auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  // Login user
  @Public()
  @ResponseMessage("Logged user")
  @Post("/login")
  handleLogin(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  // Register user
  @Public()
  @ResponseMessage("Register a new user")
  @Post("/register")
  handleRegister(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }
}
