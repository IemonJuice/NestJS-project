import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { TopicComment } from './comment.entity';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  content: string;
  @ManyToOne(() => User, (author) => author.topics)
  author: User;
  @OneToMany(() => TopicComment, (topicComment) => topicComment.topic)
  comments: TopicComment[];
}
