import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cors from 'cors';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  dotenv.config({path: '.develop.env'})

  app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true,
  }));

  app.useGlobalPipes(new ValidationPipe);

  const options = new DocumentBuilder()
    .setTitle('API Stafko - Fran Ortega')
    .setDescription('Documentación de la API usada para el proyecto de prácticas en BeeBit llamado "Stafko"')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.APP_PORT);
}

bootstrap();
