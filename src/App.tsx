import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import useAuth from "./Hooks/useAuth";
import Auth from "./Login&Register/Auth";
import AuthTrue from "./Login&Register/AuthTrue";
import Dashboard from "./Dashboard/Dashboard";
import ProtectedRoute from "./Login&Register/ProtectedRouted";

function App() {
  const { handleChange, handleSubmit, message } = useAuth();

  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Auth
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              message={message}
            />
          }
        />
        <Route path="/authtrue" element={<AuthTrue />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
