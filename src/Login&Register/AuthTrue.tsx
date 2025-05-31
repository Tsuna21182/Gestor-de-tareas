import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import animacion from "../assets/Animation - 1748721423626.gif";
import { useAuth } from "../Context/AuthContext";

function AuthTrue() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, user]);

  return (
    <div className="flex justify-center items-center h-dvh bg-gray-200">
      <img src={animacion} alt="animacion" />
    </div>
  );
}

export default AuthTrue;
