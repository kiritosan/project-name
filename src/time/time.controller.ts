import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import * as fs from 'fs';

@Controller('time')
export class TimeController {
  @Get()
  findAll(): string {
    return new Date().toString();
  }

  @Get('obj')
  findAllObj(@Req() request: Request): object {
    return { a: 1 };
  }
}
