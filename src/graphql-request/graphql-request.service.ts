import { Injectable } from '@nestjs/common';
import { CreateGraphqlRequestInput } from './dto/create-graphql-request.input';
import { UpdateGraphqlRequestInput } from './dto/update-graphql-request.input';

@Injectable()
export class GraphqlRequestService {
  create(createGraphqlRequestInput: CreateGraphqlRequestInput) {
    return 'This action adds a new graphqlRequest';
  }

  findAll() {
    return `This action returns all graphqlRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} graphqlRequest`;
  }

  update(id: number, updateGraphqlRequestInput: UpdateGraphqlRequestInput) {
    return `This action updates a #${id} graphqlRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphqlRequest`;
  }
}
