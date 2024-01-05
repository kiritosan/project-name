import { Controller, Get } from '@nestjs/common';
import { TimeService } from './time.service';

@Controller('time')
export class TimeController {
  constructor(private readonly timeService: TimeService) {}

  @Get()
  findAll(): string {
    return new Date().toString();
  }

  @Get('time')
  getCurrentTime(): string {
    return this.timeService.currentTime;
  }
}
