import { Body, Controller, Param, Post } from '@nestjs/common';
import { CommentsService } from '../../services/comments/comments.service';
import { TopicComment } from '../../../../core/models/comment.model';

@Controller('comments')
export class CommentsController {
  constructor(private commentService: CommentsService) {}
  @Post(':id')
  createCommentForTopic(@Param() id: number, @Body() comment: TopicComment) {
    return this.commentService.writeComment(id, comment);
  }
}
