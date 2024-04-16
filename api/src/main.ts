import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as cors from "cors";
import { ValidationPipe } from "@nestjs/common";
import * as dotenv from "dotenv";
import config from "./config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  dotenv.config({ path: ".develop.env" });

  app.use(
    cors({
      origin: process.env.APP_CORS,
      credentials: true,
    })
  );

  app.setGlobalPrefix("api/v1");

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    })
  );

  const options = new DocumentBuilder()
    .setTitle("API Stafko - Fran Ortega")
    .setDescription(
      'Documentación de la API usada para el proyecto de prácticas en BeeBit llamado "Stafko"'
    )
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup("api", app, document);

  await app.listen(process.env.APP_PORT);
}

bootstrap();
