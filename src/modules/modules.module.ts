import { Module } from '@nestjs/common';
import { TopicsModule } from './posts/topics.module';

@Module({
  imports: [TopicsModule],
  exports: [TopicsModule],
})
export class ModulesModule {}
