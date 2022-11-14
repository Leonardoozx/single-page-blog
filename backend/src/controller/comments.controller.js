const CommentsServices = require('../service/comments.service');

class CommentsController {
  commentsService = new CommentsServices();

  getAllComments = async (_req, res) => {
    const allComments = await this.commentsService.getAllComments();
    res.status(200).json(allComments);
  };

  postNewComment = async ({ body }, res) => {
    const { type, message } = await this.commentsService.postNewComment(body);
    if (type) return res.status(400).json({ message });
    res.status(201).json(message);
  };

  updateCommentByName = async ({ body, params }, res) => {
    const { type, message } = await this.commentsService.updateCommentByName(
      body.content,
      params.name
    );
    if (type) return res.status(404).json({ message });
    res.status(200).json(message);
  };

  deleteCommentByName = async ({ params }, res) => {
    const { type, message } = await this.commentsService.deleteCommentByName(
      +params.id
    );
    if (type) return res.status(404).json({ message });
    res.status(204).send();
  };
}

module.exports = CommentsController;
