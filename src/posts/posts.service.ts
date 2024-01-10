import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    private dataSource: DataSource,
    private readonly usersService: UsersService,
  ) {}

  async create(username: string, createPostDto: CreatePostDto) {
    const user = await this.usersService.findOne(username); // 检查用户是否存在
    if (user) {
      createPostDto.user = user;
    }
    const newPost = this.postsRepository.create(createPostDto);

    return await this.postsRepository.save(newPost);
  }

  findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  async findOne(id: string) {
    return await this.postsRepository.findOneBy({ id });
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.postsRepository.findOne({
      where: { id },
    });
    if (!post) {
      // 处理帖子不存在的情况
      return null;
    }

    const updatedPost = {
      ...post,
      ...updatePostDto,
    };

    await this.postsRepository.save(updatedPost);
    return updatedPost;
  }

  remove(id: string) {
    return `This action removes a #${id} post`;
  }
}
