import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // snapshot: true,
  });
  // or "app.enableVersioning()"
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(7791).then(() => {
    new Logger('EasyPost').log(
      'EasyPost API server has been started on http://localhost:7791',
    );
  });
}
bootstrap();
