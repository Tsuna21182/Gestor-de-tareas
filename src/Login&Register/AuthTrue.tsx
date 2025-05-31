import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import animacion from "../assets/Animation - 1748721423626.gif";
import useAuth from "../Hooks/useAuth";

function AuthTrue() {
  const navigate = useNavigate();
  const { formUser } = useAuth();

  useEffect(() => {
    if (!formUser) {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 3000);

    return () => clearTimeout(timer);
  }, [formUser, navigate]);

  return (
    <div className="flex justify-center items-center h-dvh bg-gray-200">
      <img src={animacion} alt="animacion" />
    </div>
  );
}

export default AuthTrue;
