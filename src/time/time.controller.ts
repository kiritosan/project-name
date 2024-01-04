import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import * as fs from 'fs';
import { TimeService } from './time.service';

@Controller('time')
export class TimeController {
  constructor(private readonly timeService: TimeService) {}

  @Get()
  findAll(): string {
    return new Date().toString();
  }

  @Get('obj')
  findAllObj(@Req() request: Request): object {
    return { a: 1 };
  }

  @Get('file')
  findAllFile(): string {
    return fs.readFileSync('package.json', 'utf-8'); // 读取文件
  }

  @Get('config')
  findAllConfig(): object {
    return this.timeService.printConfig();
  }
}