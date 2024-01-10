import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 通过反射获取请求路由是否添加了 @Roles() 装饰器，如果没有添加，则代表不需要进行认证
    const roles = this.reflector.get<string>('roles', context.getHandler());
    if (!roles || roles.length === 0) {
      return true;
    }

    // 在请求对象中获取 user 对象，此 user 对象是 AuthStrategy 中 validate 方法成功执行后的返回值 https://github.com/dzzzzzy/Nestjs-Learning/blob/master/demo/easy-post/src/core/guards/roles.guard.ts
    const request = context.switchToHttp().getRequest();
    const user = await this.usersRepository.findOneBy({
      username: request.user.username,
    });

    // 判断当前请求用户的角色是否符合@Roles(...)设定
    const hasRole = () => roles.includes(user.role);
    return user && hasRole();
  }
}
