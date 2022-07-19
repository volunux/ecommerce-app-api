import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common/pipes';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ValidationFilter } from './validation/validation.filter';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api/');
  app.useGlobalFilters(new ValidationFilter());
  app.enableCors({
    'origin': '*',
    'methods': "GET,HEAD,PUT,PATCH,POST,DELETE",
    'preflightContinue': false,
    'optionsSuccessStatus': 204
  });
  app.useGlobalPipes(new ValidationPipe({
    'transform': true,
    'whitelist': true,
    'exceptionFactory': ValidationFilter.exceptionFactory
  }));
  
  await app.listen(4000);
}

bootstrap();
