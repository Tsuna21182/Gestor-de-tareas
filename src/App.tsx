import { Route, Routes } from "react-router-dom";
import Auth from "./Login&Register/Auth";
import AuthTrue from "./Login&Register/AuthTrue";
import Dashboard from "./Dashboard/Dashboard";

import useAuth from "./Hooks/useAuth";

function App() {
  const { handleChange, handleSubmit, message } = useAuth();

  const isLogged = localStorage.getItem("user");

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLogged ? (
            <AuthTrue />
          ) : (
            <Auth
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              message={message}
            />
          )
        }
      />
      <Route path="/authtrue" element={<AuthTrue />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
