import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Topic } from '../../../../core/models/topic.model';

@Injectable()
export class TopicsService {
  constructor(
    @InjectRepository(Topic) private topicRepository: Repository<Topic>,
  ) {}

  async createTopic(topic: Topic): Promise<Topic> {
    return await this.topicRepository.save(topic);
  }

  async getAllTopics(): Promise<Topic[]> {
    return await this.topicRepository.find({ relations: ['comments'] });
  }

  async getTopicsByTitle(titleOfSearchingTopics: string) {
    return await this.topicRepository.findBy({
      title: titleOfSearchingTopics,
    });
  }

  async getMyTopics(authorId: number) {
    return await this.topicRepository
      .createQueryBuilder('topic')
      .where('topic.authorId = :authorId', { authorId })
      .getMany();
  }

  async updateTopic(idOfOldTopic: number, newTopic: Topic) {
    return await this.topicRepository.update(idOfOldTopic, newTopic);
  }

  async removeTopic(topicId: number) {
    return await this.topicRepository.delete(topicId);
  }
}
