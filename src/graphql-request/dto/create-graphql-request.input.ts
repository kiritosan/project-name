import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGraphqlRequestInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
