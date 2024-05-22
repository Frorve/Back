import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
  ];

  for (const options of microserviceOptions) {
    app.connectMicroservice(options);
  }

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
