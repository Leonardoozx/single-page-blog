import { useEffect, useState } from 'react';
import useGenericState from '../hooks/useGenericState';
import { getAllComents } from '../services/request';
import Context from './context';

function ContextProvider({ children }) {
  const INITIAL_STATE = {
    nameInput: '',
    commentInput: '',
  }

  const [ comments, setComments ] = useState([]);
  const [ hasNewComment, setHasNewComments ] = useState(1);

  const [ genericState, setGenericState ] = useGenericState(INITIAL_STATE);

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await getAllComents();
      setComments(data);
    };
    fetchComments()
  }, [ hasNewComment ]);

  const allValues = {
    genericState,
    setGenericState,
    comments,
    setHasNewComments
  };

  return (
    <Context.Provider value={allValues}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider;