import GlobalStyle from "./globalStyle";
import Home from "./pages/Home/Home";
import {
  Routes,
  Route,
} from "react-router-dom";
import Books from "./pages/Books/Books";
import Header from "./components/Header/Header";
import CreateBook from "./pages/CreateBook/CreateBook";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livros" element={<Books />} />
        <Route path="/criar-livro" element={<CreateBook />} />
        <Route path="/editar-livro/:id" element={<CreateBook />} />
      </Routes>
    </div>
  );
}

export default App;
