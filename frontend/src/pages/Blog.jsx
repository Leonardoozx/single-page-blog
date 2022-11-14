import { useContext } from "react";
import CommentInputs from "../components/CommentInputs";
import CommentsCard from "../components/CommentsCard";
import context from "../context/context";
import { postComment } from '../services/request';

function Blog() {
  const { genericState, comments, setHasNewComments } = useContext(context);

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    await postComment(genericState.nameInput, genericState.commentInput);
    setHasNewComments((prevValue) => prevValue + 1)
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
      {comments[0] && comments.map((comment) => (
        <CommentsCard comment={comment} />
      ))}
    </div>
  )
}

export default Blog;