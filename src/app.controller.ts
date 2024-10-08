import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { Public } from "./decorator/customize";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get("/")
  home() {
    return this.appService.home();
  }
}
