import { Route, Routes } from "react-router-dom";
import Login from "./Login&Register/Login";

import Register from "./Login&Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
