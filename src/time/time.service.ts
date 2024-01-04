import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TimeService {
  constructor(private configService: ConfigService) {}

  printConfig() {
    console.log(this.configService.get('APP_NAME'));
    return this.configService;
  }
}
