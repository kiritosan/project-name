import { Photo } from 'src/photo/entities/photo.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  //   @OneToMany((type) => Photo, (photo) => photo.user)
  //   photos: Photo[];
}
