import "./App.css";
import UpComponent from "./data/UpComponent";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Reducer from "./reducer/index.tsx";
import Action from "./action/index.tsx";
function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <Link to="/">
          <button>优化</button>
        </Link>
        <Link to="/reducer">
          <button>Reducer</button>
        </Link>
        <Link to="/action">
          <button>Action</button>
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<UpComponent />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/action" element={<Action />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
