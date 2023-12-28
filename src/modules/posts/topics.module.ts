import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Topic } from '../../database/entites/topic.entity';
import { CommentsService } from './services/comments/comments.service';
import { TopicsService } from './services/topics/topics.service';
import { TopicComment } from '../../database/entites/comment.entity';
import { CommentsController } from './controllers/comments/comments.controller';
import { TopicsController } from './controllers/topics/topics.controller';

@Module({
  controllers: [TopicsController, CommentsController],
  providers: [TopicsService, CommentsService],
  imports: [TypeOrmModule.forFeature([Topic, TopicComment])],
})
export class TopicsModule {}
