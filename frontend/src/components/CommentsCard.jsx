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
        <button type="button">
          <img src="https://cdn-icons-png.flaticon.com/512/84/84380.png " alt="edit button" />
        </button>
        <button className="delete-btn" type="button">
          <img src="https://cdn-icons-png.flaticon.com/512/1799/1799391.png" alt="delete button" />
        </button>
      </div>
    </div>
  )
}

export default CommentsCard;