import { Test, TestingModule } from '@nestjs/testing';
import { TimeController } from './time.controller';
import { TimeService } from './time.service';

describe('TimeController', () => {
  let controller: TimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeController],
      providers: [
        {
          provide: TimeService,
          useClass: class {
            // Mock ConfigService methods if needed for testing
          },
        },
      ],
    }).compile();

    controller = module.get<TimeController>(TimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
