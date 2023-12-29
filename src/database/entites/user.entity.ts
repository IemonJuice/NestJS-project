import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Topic } from './topic.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  @Exclude()
  password: string;
  @Column()
  firstName: string;
  @Column()
  age: number;
  @Column()
  gender: string;
  @Column()
  email: string;
  @OneToMany(() => Topic, (topic) => topic.author)
  topics: Topic[];
}
