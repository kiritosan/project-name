import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // snapshot: true,
  });
  // or "app.enableVersioning()"
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(7791);
}
bootstrap();
