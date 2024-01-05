import { Controller, Get } from '@nestjs/common';
import { ConfigService, DatabaseConfig } from './config.service';
import * as fs from 'fs';

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  findAll(): string {
    return new Date().toString();
  }

  @Get('DBUser')
  findAllConfig(): string {
    return this.configService.printDBUser();
  }

  @Get('DBInfo')
  findAllConfigDB(): DatabaseConfig {
    return this.configService.printDB();
  }

  @Get('package.json')
  findAllFile(): string {
    return fs.readFileSync('package.json', 'utf-8'); // 读取文件
  }
}
