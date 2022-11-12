import { useEffect } from 'react';
import { useState } from 'react';
import useGenericState from './hooks/useGenericState';

function App() {
  const INITIAL_STATE = {
    nameInput: '',
    commentInput: '',
  };

  const [ genericState, setGenericState ] = useGenericState(INITIAL_STATE);
  const [ comments, setComments ] = useState([]);

  const handleSubmitClick = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchComments = async () => {
      // const URL = "";
      // const allComments = await axios.get(URL)
      const allComments = [ {
        id: 1,
        user: 'Leonardo',
        content: 'asdasdasoidjasoidjsajdklasjdlasjlkdajalksjdlaskjdlkasjlsajldkjlkadjlksajldkajsldkasjlkdajslkdjsalkajslkdjsaldklasjldkasjldksajldksajlksassss',
        date: `${new Date().toLocaleDateString('en-US')} - ${new Date().toLocaleTimeString()}`
      }, {
        id: 2,
        user: 'Leonardo',
        content: 'asdasdasoidjasoidjsajdklasjdlasjlkdajalksjdlaskjdlkasjlsajldkjlkadjlksajldkajsldkasjlkdajslkdjsalkajslkdjsaldklasjldkasjldksajldksajlksassss',
        date: `${new Date().toLocaleDateString('en-US')} - ${new Date().toLocaleTimeString()}`
      } ]
      setComments(allComments)
    };
    fetchComments()
  }, []);

  return (
    <div className="main-container">
      <header>A retro single page blog</header>
      <form className="form-container" onSubmit={handleSubmitClick}>
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
          placeholder="Type your name..."
          type="text"
        />
        <button type="submit">Send</button>
      </form>

      {comments?.map((comment) => (
        <div className="comment-container" key={comment.id}>
          <div className="comment-info">
            <p>{comment.user}</p>
            <p>{comment.content}</p>
            <p className="comment-date">{comment.date}</p>
          </div>
          <div className="comment-btns">
            <button className="edit-btn" type="button">
              <img src="https://cdn-icons-png.flaticon.com/512/84/84380.png " alt="edit button" />
            </button>
            <button className="delete-btn" type="button">
              <img src="https://cdn-icons-png.flaticon.com/512/1799/1799391.png" alt="delete button" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
