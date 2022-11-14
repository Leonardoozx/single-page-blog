import { useContext } from "react";
import context from "../context/context";

function CommentInputs() {
  const { genericState, setGenericState } = useContext(context);
  return (
    <>
      <input
        onChange={setGenericState}
        value={genericState.nameInput}
        placeholder="Type your name..."
        name="nameInput"
        type="text"
        autoComplete="off"
      />
      <textarea
        autoComplete="off"
        onChange={setGenericState}
        value={genericState.commentInput}
        name="commentInput"
        placeholder="Type something cool that happened in your day :)"
        type="text"
        maxLength={140}
      />
    </>
  )
}

export default CommentInputs;