import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class GraphqlRequest {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
