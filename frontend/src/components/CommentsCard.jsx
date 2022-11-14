import CommentButtons from './CommentButtons'

function CommentsCard({comment}) {
  return (
    <div className="comment-container" key={comment.id}>
      <div className="comment-info">
        <p className="comment-user">{comment.user}</p>
        <p className="comment-content">{comment.content}</p>
        <hr />
        <p className="comment-date">{comment.date}</p>
      </div>
      <div className="comment-btns">
        <CommentButtons {...comment} />
      </div>
    </div>
  )
}

export default CommentsCard;