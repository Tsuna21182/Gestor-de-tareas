import { Route, Routes, Link } from "react-router-dom";
import Inicio from "./components/Inicio";
import Acerca from "./components/Acerca";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/acerca">Acerca</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
    </>
  );
}

export default App;
