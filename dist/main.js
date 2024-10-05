"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const reflector = app.get(core_1.Reflector);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({
        "origin": "*",
        "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
        "preflightContinue": false,
    });
    await app.listen(configService.get("PORT"));
}
bootstrap();
//# sourceMappingURL=main.js.map