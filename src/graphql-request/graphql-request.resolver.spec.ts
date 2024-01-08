import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlRequestResolver } from './graphql-request.resolver';
import { GraphqlRequestService } from './graphql-request.service';

describe('GraphqlRequestResolver', () => {
  let resolver: GraphqlRequestResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphqlRequestResolver, GraphqlRequestService],
    }).compile();

    resolver = module.get<GraphqlRequestResolver>(GraphqlRequestResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
