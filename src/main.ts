import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ConfigService } from "@nestjs/config";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { Logger, ValidationPipe, VersioningType } from "@nestjs/common";
import { TransformInterceptor } from "./core/transform.interceptor";
import cookieParser from "cookie-parser";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));

  // app.useStaticAssets(join(__dirname, "..", "public"));
  // app.setBaseViewsDir(join(__dirname, "..", "views"));
  // app.setViewEngine("ejs");

  app.useGlobalPipes(new ValidationPipe());

  // Interceptor
  app.useGlobalInterceptors(new TransformInterceptor(reflector));

  app.use(cookieParser());

  // Config CORS
  app.enableCors({
    origin: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    preflightContinue: false,
  });

  // Config version
  // app.setGlobalPrefix('api');
  // app.enableVersioning({
  //   type: VersioningType.URI,
  //   defaultVersion: ['1', '2'],
  // });

  // Config swagger
  const config = new DocumentBuilder()
    .setTitle("Project social spaces")
    .setDescription("All Module API")
    .addBearerAuth(
      {
        type: "http",
        scheme: "Bearer",
        bearerFormat: "JWT",
        in: "header",
      },
      "token"
    )
    .addSecurityRequirements("token")
    .setVersion("1.0")
    .build();

  // Để mở documentation thì dùng lệnh sau npx @compodoc/compodoc -p tsconfig.json -s
  // Rồi vào cổng http://localhost:8080/ để mở documentation
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, documentFactory, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  const logger = new Logger("Social-Network-SNET");
  await app.listen(configService.get<string>("PORT"), () => {
    logger.log(
      `Server running on port http://localhost:${configService.get<string>("PORT")}`
    );
  });
}
bootstrap();
