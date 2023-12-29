import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerBuilder } from './document';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
    prefix: 'api/v',
  });

  new SwaggerBuilder(app).setup();

  app.useGlobalPipes(new ValidationPipe({}));

  app.enableCors({
    origin: new RegExp('(.*)'),
    credentials: true,
  });

  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
