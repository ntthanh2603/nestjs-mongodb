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
import { LocalAuthGuard } from "./auth/local-auth.guard";
import { AuthService } from "./auth/auth.service";
import { Public } from "./decorator/customize";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
    private authService: AuthService,
  ) {}

  @Public()
  @Get("/")
  home() {
    return this.appService.home();
  }
}
