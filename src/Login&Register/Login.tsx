import BtnBase from "../components/BtnBase";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center h-dvh items-center bg-[url(/images/stars.jpg)] bg-no-repeat bg-center bg-cover">
      <div className="text-center bg-white/10 p-25 rounded-2xl">
        <h2 className="text-4xl text-white uppercase tracking-widest">login</h2>
        <form
          action=""
          className="flex flex-col justify-center text-center items-center mt-10 p-10 space-y-15"
        >
          <input
            type="text"
            placeholder="username"
            className="placeholder-white text-white outline-0 border-0 border-b-Green border-b-2 text-center py-2 text-2xl"
          />
          <input
            type="password"
            placeholder="password"
            className="placeholder-white text-white outline-0 border-0 border-b-Green border-b-2 text-center py-2 text-2xl"
          />
          <BtnBase nombre={"iniciar"} type="submit" />
        </form>
        <div className="flex flex-col gap-5">
          <Link
            className="text-white font-black transition-all duration-300 hover:scale-105 text-xl uppercase"
            to="/registro"
          >
            Registrate
          </Link>

          <p className="text-white/80 text-xl uppercase">
            lugar para olvidar password
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
