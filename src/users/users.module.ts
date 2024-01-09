import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserSubscriber } from './user.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UserSubscriber],
  // Now if we import UsersModule in UserHttpModule, we can use @InjectRepository(User) in the providers of the latter module.
  exports: [TypeOrmModule, UsersService],
})
export class UsersModule {}
