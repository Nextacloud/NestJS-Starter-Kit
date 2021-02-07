import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.setGlobalPrefix('api');

  const APP_PORT = process.env.APP_PORT || 3000;
  const APP_NAME = process.env.APP_NAME || 'NestJS Starter Kit';

  console.log(`${APP_NAME} is listening at http://localhost:${APP_PORT}`);

  await app.listen(APP_PORT);
}
bootstrap();
