const { Comments } = require('../db/models');

class CommentsServices {
  formatedDate = new Date().toLocaleString().split(', ').join(' ');

  getAllComments = () => Comments.findAll();

  updateCommentById = async ({ content, user }, id) => {
    console.log('taaqui');
    try {
      await Comments.update(
        { user, content, date: this.formatedDate },
        { where: { id } }
      );
      const updatedUserComment = {
        user,
        content,
        date: this.formatedDate,
      };
      return { type: null, message: updatedUserComment };
    } catch (_error) {
      return { type: 'ERROR', message: 'Could not update your comment :(' };
    }
  };

  postNewComment = async ({ content, user }) => {
    try {
      await Comments.create({ user, content, date: this.formatedDate });
      const insertedComment = {
        user,
        content,
        date: this.formatedDate,
      };
      return { type: null, message: insertedComment };
    } catch (_error) {
      return { type: 'ERROR', message: 'Could not insert your comment :(' };
    }
  };

  deleteCommentById = async (id) => {
    try {
      await Comments.destroy({ where: { id } });
      return { type: null, message: '' };
    } catch (_error) {
      return { type: 'ERROR', message: 'Could not delete your comment :(' };
    }
  };
}

module.exports = CommentsServices;
