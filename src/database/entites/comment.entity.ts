import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Topic } from './topic.entity';

@Entity()
export class TopicComment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;
  @Column()
  authorName: string;
  @ManyToOne(() => Topic, (topic) => topic.comments)
  topic: Topic;
}
