import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  type User,
  updateProfile,
} from "firebase/auth";
import appFirebase from "../Credenciales";

const auth = getAuth(appFirebase);

function useAuth() {
  const [usuario, setUsuario] = useState<User | null>(null);
  const [formUser, setFormUser] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        setUsuario(userFirebase);
      } else {
        setUsuario(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = formUser;

    if (!email || !password) {
      setMessage("Completa todos los campos.");
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(userCredential.user, {
          displayName: formUser.nombre,
        });
      }
      setMessage("");
      navigate("/authtrue");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("Ocurrio un error desconocido");
      }
    }
  };

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("user");
    setFormUser({ nombre: "", email: "", password: "" });
    setUsuario(null);
    navigate("/");
  };

  return {
    handleChange,
    handleSubmit,
    message,
    formUser,
    isLogin,
    setIsLogin,
    logout,
    usuario,
  };
}

export default useAuth;
