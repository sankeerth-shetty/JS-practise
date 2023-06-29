// import logo from './logo.svg';
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/home";
import BookList from "./components/booklist";
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Book</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
    </div>
  );
}

export default App;
