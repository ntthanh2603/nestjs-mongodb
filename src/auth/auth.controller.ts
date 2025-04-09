import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Public, ResponseMessage, User } from "src/decorator/customize";
import { LoginDto } from "src/users/dto/login.dto";
import { Request, Response } from "express";
import { IUser } from "src/users/users.interface";
import { RegisterUserDto } from "src/users/dto/register-user.dto";

@Controller("/auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  // Login user
  @Public()
  @ResponseMessage("User login")
  @Post("/login")
  handleLogin(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) response: Response
  ) {
    return this.authService.login(dto, response);
  }

  // Register user
  @Public()
  @ResponseMessage("Register a new user")
  @Post("/register")
  handleRegister(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  // Get account information
  @Get("/account")
  @ResponseMessage("Get user information")
  handleGetAccount(@User() user: IUser) {
    return user;
  }

  // Get user by refresh token
  @Public()
  @ResponseMessage("Get user by refresh token")
  @Get("/refresh")
  handleRefreshToken(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response
  ) {
    const refreshToken = request.cookies["refresh_token"];
    return this.authService.processNewToken(refreshToken, response);
  }

  // Logout user
  @Post("/logout")
  @ResponseMessage("Logout user")
  hendleLogout(
    @Res({ passthrough: true }) response: Response,
    @User() user: IUser
  ) {
    return this.authService.logout(response, user);
  }
}
