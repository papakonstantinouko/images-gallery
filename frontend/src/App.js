import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const [text, setText] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_KEY}&query=${text}`
    )
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <>
      <Header />
      <Search text={text} setText={setText} onSubmit={handleSearchSubmit} />
    </>
  );
}

export default App;
