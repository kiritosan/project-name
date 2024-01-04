import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TimeService {
  constructor(private configService: ConfigService) {}

  printDBUser() {
    return this.configService.get<string>('DATABASE_USER');
  }

  printDB() {
    return this.configService.get<string>('db');
  }
}
