import Blog from './pages/Blog';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Blog />
    </ContextProvider>
  );
}

export default App;
