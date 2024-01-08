import { CreateGraphqlRequestInput } from './create-graphql-request.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGraphqlRequestInput extends PartialType(CreateGraphqlRequestInput) {
  @Field(() => Int)
  id: number;
}
