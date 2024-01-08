import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { DevtoolsModule } from '@nestjs/devtools-integration';
// import { TimeController } from './time/time.controller';
import { ExportMessageMiddleware } from './export-message/export-message.middleware';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { TimeModule } from './time/time.module';
import { ConfigModule } from './config/config.module';
import configuration from 'config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { PhotoModule } from './photo/photo.module';
import { NotificationModule } from './notification/notification.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { GraphqlRequestModule } from './graphql-request/graphql-request.module';

@Module({
  imports: [
    // DevtoolsModule.register({
    //   http: process.env.NODE_ENV !== 'production',
    // }),
    NestConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      isGlobal: true,
      load: [configuration],
    }),
    TimeModule,
    ConfigModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test',
      password: 'test',
      database: 'test',
      // With that option specified, every entity registered through the forFeature() method will be automatically added to the entities array of the configuration object.
      autoLoadEntities: true,
      // entities: [User],
      // Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
      synchronize: true,
    }),
    TodoModule,
    UsersModule,
    PhotoModule,
    NotificationModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // Schema first
      // typePaths: ['./**/*.graphql'],
      // definitions: {
      //   path: join(process.cwd(), 'src/graphql.ts'),
      // },

      // code first
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    GraphqlRequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExportMessageMiddleware).forRoutes('*');
  }
}
