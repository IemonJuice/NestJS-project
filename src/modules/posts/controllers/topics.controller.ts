import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { TopicsService } from '../services/topics.service';
import { Topic } from "../../../core/models/topic.model";


@Controller('topics')
export class TopicsController {
  constructor(private topicService: TopicsService) {}

  @Get()
  async getAllTopics(): Promise<Topic[]> {
    return await this.topicService.getAllTopics();
  }

  @Get('title/:title')
  async getTopicsByTitle(@Param('title') title: string) {
    return await this.topicService.getTopicsByTitle(title);
  }
  @Get('author/:authorId')
  async getMyTopics(@Param('authorId') authorId: number) {
    return await this.topicService.getMyTopics(authorId);
  }

  @Post()
  async createTopic(@Body() post: Topic) {
    await this.topicService.createTopic(post);
  }

  @Patch(':id')
  async changeTopicContent(
    @Body() newTopic: Topic,
    @Param() idOfOldTopic: number,
  ) {
    return await this.topicService.updateTopic(idOfOldTopic, newTopic);
  }
  @Delete(':id')
  @HttpCode(204)
  async removeTopic(@Param() topicId: number) {
    await this.topicService.removeTopic(topicId);
  }
}
