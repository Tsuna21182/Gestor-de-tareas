import { useState } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  nombre: string;
  email: string;
  password: string;
};

function useAuth() {
  const [formUser, setFormUser] = useState<User>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser
      ? JSON.parse(storedUser)
      : { nombre: "", email: "", password: "" };
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emptyFields = Object.values(formUser).filter((v) => v.trim() === "");

    if (emptyFields.length === 0) {
      localStorage.setItem("user", JSON.stringify(formUser));
      setMessage("Iniciando sesión...");
      navigate("/authtrue");
    } else {
      setMessage("Completa todos los campos.");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setFormUser({ nombre: "", email: "", password: "" });
    navigate("/");
  };

  return {
    handleChange,
    handleSubmit,
    message,
    formUser,
    logout,
  };
}

export default useAuth;
