import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';

import * as helmet from 'helmet';
import * as csurf from 'csurf';

import { session, sessionNotFound } from './middlewares/session.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.setGlobalPrefix('api');

  app.use(helmet());

  app.use(session());

  app.use(sessionNotFound);

  // app.use(csurf());

  const APP_PORT = process.env.APP_PORT || 3000;
  const APP_NAME = process.env.APP_NAME || 'NestJS Starter Kit';

  console.log(`${APP_NAME} is listening at http://localhost:${APP_PORT}`);

  await app.listen(APP_PORT);
}
bootstrap();
