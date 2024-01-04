import { Controller, Get } from '@nestjs/common';
import { ConfigService } from './config.service';

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get('config')
  findAllConfig(): string {
    return this.configService.printDBUser();
  }

  @Get('configDB')
  findAllConfigDB(): string {
    return this.configService.printDB();
  }
}
