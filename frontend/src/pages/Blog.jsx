import { useContext } from "react";
import CommentInputs from "../components/CommentInputs";
import CommentsCard from "../components/CommentsCard";
import context from "../context/context";
import { postComment, updateComment } from '../services/request';

function Blog() {
  const {
    userId,
    willEdit,
    setWillEdit,
    genericState,
    comments,
    setHasNewComments,
    setGenericState
  } = useContext(context);

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    const defaultTarget = (name) => ({ target: { name, value: '' } });
    const body = { user: genericState.nameInput, content: genericState.commentInput };
    if (willEdit) {
      await updateComment(userId, body);
      setWillEdit(false);
      setHasNewComments((prevValue) => prevValue + 1);
      setGenericState(defaultTarget('nameInput'));
      setGenericState(defaultTarget('commentInput'));
      return;
    }
    await postComment(genericState.nameInput, genericState.commentInput);
    setHasNewComments((prevValue) => prevValue + 1);
    setGenericState(defaultTarget('nameInput'));
    setGenericState(defaultTarget('commentInput'));
  };
  return (
    <div className="main-container">
      <header>A retro single page blog</header>
      <form className="form-container" onSubmit={handleSubmitClick}>
        <div>
          <CommentInputs />
          <button type="submit">Send</button>
        </div>
      </form>
      {comments[ 0 ] && comments.map((comment) => (
        <CommentsCard key={comment.id} comment={comment} />
      ))}
    </div>
  )
}

export default Blog;