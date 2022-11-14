const express = require('express');

const router = express.Router();

const CommentsController = require('../controller/comments.controller');

const commentsController = new CommentsController();

router.get('/', commentsController.getAllComments);
router.post('/', commentsController.postNewComment);
router.put('/:name', commentsController.updateCommentByName);
router.delete('/:id', commentsController.deleteCommentByName);

module.exports = router;
