import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { UsersService } from 'src/users/users.service';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  async create(@Req() req, @Body() createPostDto: CreatePostDto) {
    const user = await this.usersService.findOne(req.user.username); // 检查用户是否存在
    console.log(
      '🚀 ~ file: posts.controller.ts:30 ~ PostsController ~ create ~ user:',
      user,
    );
    debugger;
    if (user) {
      createPostDto.user = user;
      await this.postsService.create(createPostDto);
      return { code: 200, message: '创建帖子成功' };
    }
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
