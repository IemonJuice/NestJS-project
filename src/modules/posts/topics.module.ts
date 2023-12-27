import { Module } from '@nestjs/common';
import { TopicsController } from './controllers/topics.controller';
import { TopicsService } from './services/topics.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topic } from '../../database/entites/topic.entity';

@Module({
  controllers: [TopicsController],
  providers: [TopicsService],
  imports: [TypeOrmModule.forFeature([Topic])],
})
export class TopicsModule {}
