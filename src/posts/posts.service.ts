import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    private dataSource: DataSource,
  ) {}

  async create(createPostDto: CreatePostDto) {
    console.log(
      '🚀 ~ file: posts.service.ts:17 ~ PostsService ~ create ~ createPostDto:',
      createPostDto,
    );
    const newPost = this.postsRepository.create(createPostDto);

    return await this.postsRepository.save(newPost);
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
