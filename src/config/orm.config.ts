import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../database/entites/user.entity';
import { Topic } from '../database/entites/topic.entity';

export default (): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  //TODO remove hardcoded values:)
  username: 'root',
  password: 'example',
  database: 'topic_io',
  entities: [User, Topic],
  synchronize: true,
});
