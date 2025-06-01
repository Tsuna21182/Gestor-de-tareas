import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import animacion from "../assets/Animation - 1748721423626.gif";

import { getAuth, onAuthStateChanged } from "firebase/auth";

function AuthTrue() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      } else {
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-dvh bg-gray-200">
      <img src={animacion} alt="animacion" />
    </div>
  );
}

export default AuthTrue;
