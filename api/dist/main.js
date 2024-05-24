"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cors = require("cors");
const swagger_1 = require("@nestjs/swagger");
const dotenv = require("dotenv");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    dotenv.config({ path: ".develop.env" });
    const microserviceOptions = [
        {
            transport: microservices_1.Transport.TCP,
            options: {
                host: '127.0.0.1',
                port: 3001,
            },
        },
        {
            transport: microservices_1.Transport.TCP,
            options: {
                host: '127.0.0.1',
                port: 3002,
            },
        },
        {
            transport: microservices_1.Transport.TCP,
            options: {
                host: '127.0.0.1',
                port: 3003,
            },
        },
        {
            transport: microservices_1.Transport.TCP,
            options: {
                host: '127.0.0.1',
                port: 3004,
            },
        },
        {
            transport: microservices_1.Transport.TCP,
            options: {
                host: '127.0.0.1',
                port: 3005,
            },
        },
    ];
    for (const options of microserviceOptions) {
        app.connectMicroservice(options);
    }
    app.use(cors({
        origin: process.env.APP_CORS,
        credentials: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle("API Stafko | Directus | Microservicios - Fran Ortega")
        .setDescription('Documentación de la API con Directus + Microservicios usada para el proyecto de prácticas en BeeBit llamado "Stafko"')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    await app.startAllMicroservices();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map