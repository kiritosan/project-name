import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

export interface DatabaseConfig {
  host: string;
  port: number;
}

@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService) {}

  // get DBUser info from dotenv file
  printDBUser() {
    return this.configService.get<string>('DATABASE_USER');
  }

  // get db info from yaml
  printDB() {
    return this.configService.get<DatabaseConfig>('db');
  }
}
