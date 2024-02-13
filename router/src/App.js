import { Link,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booklist from "./pages/Booklist";





function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">BookList</Link></li>

        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books" element={<Booklist />}/>
      </Routes>
    </>
   
  );
}

export default App;
