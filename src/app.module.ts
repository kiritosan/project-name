import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { DevtoolsModule } from '@nestjs/devtools-integration';
// import { TimeController } from './time/time.controller';
import { ExportMessageMiddleware } from './export-message/export-message.middleware';
import { ConfigModule } from '@nestjs/config';
import { TimeModule } from './time/time.module';
import { ConfigModule } from './config/config.module';
import configuration from 'config/configuration';

@Module({
  imports: [
    // DevtoolsModule.register({
    //   http: process.env.NODE_ENV !== 'production',
    // }),
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      isGlobal: true,
      load: [configuration],
    }),
    TimeModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExportMessageMiddleware).forRoutes('*');
  }
}
