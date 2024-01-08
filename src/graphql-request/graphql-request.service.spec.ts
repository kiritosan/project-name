import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlRequestService } from './graphql-request.service';

describe('GraphqlRequestService', () => {
  let service: GraphqlRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphqlRequestService],
    }).compile();

    service = module.get<GraphqlRequestService>(GraphqlRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
