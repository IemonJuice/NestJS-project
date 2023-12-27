import { User } from './user';

export class Topic {
  id?: number;
  title: string;
  content: string;
  author: User;
}
