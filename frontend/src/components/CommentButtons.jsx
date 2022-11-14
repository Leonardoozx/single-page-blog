import { useContext } from "react"
import context from "../context/context"
import { deleteComment } from "../services/request";

function CommentButtons({ id, content, user }) {
  const { setGenericState, setHasNewComments, setWillEdit, setUserId } = useContext(context);

  const handleEditClick = () => {
    setGenericState({ target: { name: "commentInput", value: content } });
    setGenericState({ target: { name: "nameInput", value: user } });
    setUserId(id)
    setWillEdit(true);
  }

  const handleDeleteClick = async () => {
    await deleteComment(id)
    setHasNewComments((prevValue) => prevValue + 1);
  }
  return (
    <>
      <button onClick={handleEditClick} type="button">
        <img src="https://cdn-icons-png.flaticon.com/512/84/84380.png " alt="edit button" />
      </button>
      <button onClick={handleDeleteClick} className="delete-btn" type="button">
        <img src="https://cdn-icons-png.flaticon.com/512/1799/1799391.png" alt="delete button" />
      </button>
    </>
  )
}
export default CommentButtons