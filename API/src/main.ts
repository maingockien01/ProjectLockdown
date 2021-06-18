import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { appConfig } from './config';

//import './database'; //Init database connection

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .setTitle('Project Lockdown API')
        .setDescription('This the api of project lockdown')
        .setVersion('2.0')
        .addTag('ProjectLockdown')
        .build();

    const apiDocument = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/docs', app, apiDocument);

    await app.listen(appConfig.port);
}

bootstrap();
