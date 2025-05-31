// src/Hooks/useAuth.ts
import { useState } from "react";
import { useAuth as useAuthContext } from "../Context/AuthContext";

function useAuth() {
  const { user, isAuthenticated, login, logout } = useAuthContext();

  const [formUser, setFormUser] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emptyFields = Object.values(formUser).filter(
      (valor) => valor.trim() === ""
    );
    if (emptyFields.length <= 0) {
      setMessage("Haz Iniciado sesión.");
      login(formUser);
    } else {
      setMessage("Usuario no verificado.");
    }
  };

  return {
    handleChange,
    handleSubmit,
    message,
    isAuthenticated,
    logout,
    user,
  };
}

export default useAuth;
