import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from "cors";
import * as dotenv from "dotenv";
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  dotenv.config({ path: ".develop.env" });

  const microserviceOptions: MicroserviceOptions[] = [
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3001,
      },
    },
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3002,
      },
    },
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3003,
      },
    },
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3004,
      },
    },
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3005,
      },
    },
  ];

  for (const options of microserviceOptions) {
    app.connectMicroservice(options);
  }

  app.use(
    cors({
      origin: process.env.APP_CORS,
      credentials: true,
    })
  );

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
