import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GraphqlRequestService } from './graphql-request.service';
import { GraphqlRequest } from './entities/graphql-request.entity';
import { CreateGraphqlRequestInput } from './dto/create-graphql-request.input';
import { UpdateGraphqlRequestInput } from './dto/update-graphql-request.input';

@Resolver(() => GraphqlRequest)
export class GraphqlRequestResolver {
  constructor(private readonly graphqlRequestService: GraphqlRequestService) {}

  @Mutation(() => GraphqlRequest)
  createGraphqlRequest(
    @Args('createGraphqlRequestInput')
    createGraphqlRequestInput: CreateGraphqlRequestInput,
  ) {
    return this.graphqlRequestService.create(createGraphqlRequestInput);
  }

  @Query(() => [GraphqlRequest], { name: 'graphqlRequest' })
  findAll() {
    return this.graphqlRequestService.findAll();
  }

  @Query(() => GraphqlRequest, { name: 'graphqlRequest' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlRequestService.findOne(id);
  }

  @Mutation(() => GraphqlRequest)
  updateGraphqlRequest(
    @Args('updateGraphqlRequestInput')
    updateGraphqlRequestInput: UpdateGraphqlRequestInput,
  ) {
    return this.graphqlRequestService.update(
      updateGraphqlRequestInput.id,
      updateGraphqlRequestInput,
    );
  }

  @Mutation(() => GraphqlRequest)
  removeGraphqlRequest(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlRequestService.remove(id);
  }
}
