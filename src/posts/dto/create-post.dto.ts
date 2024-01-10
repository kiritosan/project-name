import { User } from 'src/users/entities/user.entity';
import { Column } from 'typeorm';

export class CreatePostDto {
  @Column()
  title: string;

  @Column({
    type: 'text',
  })
  content: string;

  @Column()
  user: User;
}
