import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Books from './components/books';
import { useEffect, useState } from 'react';

const API_URL = "http://127.0.0.1:3000/books";

const getAPIData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
}


function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then(items => {
      if (mounted) {
        console.log("items: ", items)
        setBooks(items)
      }
    });
    return () => { mounted = false };
  }, []);

  return (
    <div className="App">
      <Books books={books} />
    </div>
  );
}

export default App;
