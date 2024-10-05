import {
  Controller,
  Get,
  Post,
  Render,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { ConfigService } from "@nestjs/config";
import { AuthGuard } from "@nestjs/passport";
import { LocalAuthGuard } from "./auth/local-auth.guard";
import { AuthService } from "./auth/auth.service";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { Public } from "./decorator/customize";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
    private authService: AuthService,
  ) {}

  @Get()
  home() {
    return "Page Home";
  }

  @Public()
  @Post("/login")
  @UseGuards(LocalAuthGuard)
  handleLogin(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }

  @Public()
  @Get("profile1")
  getProfile1(@Request() req) {
    return req.user;
  }
}
