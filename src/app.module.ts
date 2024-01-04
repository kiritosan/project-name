import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { DevtoolsModule } from '@nestjs/devtools-integration';
import { TimeController } from './time/time.controller';
import { ExportMessageMiddleware } from './export-message/export-message.middleware';

@Module({
  imports: [
    // DevtoolsModule.register({
    //   http: process.env.NODE_ENV !== 'production',
    // }),
  ],
  controllers: [AppController, TimeController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExportMessageMiddleware).forRoutes('*');
  }
}
