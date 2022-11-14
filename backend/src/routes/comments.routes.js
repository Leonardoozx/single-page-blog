const express = require('express');

const router = express.Router();

const CommentsController = require('../controller/comments.controller');

const commentsController = new CommentsController();

router.get('/', commentsController.getAllComments);
router.post('/', commentsController.postNewComment);
router.put('/:id', commentsController.updateCommentById);
router.delete('/:id', commentsController.deleteCommentById);

module.exports = router;
