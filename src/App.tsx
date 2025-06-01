import { Route, Routes } from "react-router-dom";
import Auth from "./Login&Register/LoginRegister";
import AuthTrue from "./Login&Register/AuthTrue";
import Dashboard from "./Dashboard/Dashboard";
import useAuth from "./Hooks/useAuth";
import DarkMode from "./components/DarkMode";
import { useState, useEffect } from "react";

function App() {
  const { handleChange, handleSubmit, message, isLogin, setIsLogin, usuario } =
    useAuth();

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === " dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const isLogged = localStorage.getItem("user");

  return (
    <main
      className={`min-h-screen transition-colors duration-500 bg-gray-200 text-black  font-display ${
        darkMode ? "dark:bg-BlackBackground dark:text-white" : ""
      }`}
    >
      {usuario && (
        <div className="flex justify-between items-center px-15">
          <img src="/images/logo.png" alt="imagen logo" />
          <DarkMode setDarkMode={setDarkMode} darkMode={darkMode} />
        </div>
      )}

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
                isLogin={isLogin}
                setIsLogin={setIsLogin}
              />
            )
          }
        />
        <Route path="/authtrue" element={<AuthTrue />} />
        <Route path="/dashboard" element={<Dashboard darkMode={darkMode} />} />
      </Routes>
    </main>
  );
}

export default App;
