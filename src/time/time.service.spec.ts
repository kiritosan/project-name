import { Test, TestingModule } from '@nestjs/testing';
import { TimeService } from './time.service';
import { ConfigModule } from '@nestjs/config';

describe('TimeService', () => {
  let service: TimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule], // 如果有其他模块的依赖，请在这里添加
      providers: [TimeService],
    }).compile();

    service = module.get<TimeService>(TimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
