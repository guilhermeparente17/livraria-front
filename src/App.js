import GlobalStyle from "./globalStyle";
import Home from "./pages/Home/Home";
import {
  Routes,
  Route,
} from "react-router-dom";
import Books from "./pages/Books/Books";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livros" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
