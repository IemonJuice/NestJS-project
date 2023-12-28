import { UserModel } from './user.model';

export class Topic {
  id?: number;
  title: string;
  content: string;
  author: UserModel;
  comments: string[];
}
