import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TopicComment } from '../../../../core/models/comment.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(TopicComment)
    private commentsRepository: Repository<TopicComment>,
  ) {}

  async writeComment(topicId: number, comment: TopicComment) {
    comment.topic = topicId;
    return await this.commentsRepository.save(comment);
  }
}
