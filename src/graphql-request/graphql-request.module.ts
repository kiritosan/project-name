import { Module } from '@nestjs/common';
import { GraphqlRequestService } from './graphql-request.service';
import { GraphqlRequestResolver } from './graphql-request.resolver';

@Module({
  providers: [GraphqlRequestResolver, GraphqlRequestService],
})
export class GraphqlRequestModule {}
