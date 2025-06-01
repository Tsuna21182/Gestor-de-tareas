import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

import BtnBase from "../components/BtnBase";

type AuthProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  message: string;
};

function Auth({ handleChange, handleSubmit, message }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center h-dvh items-center">
      <div className="relative w-[900px] h-[600px] bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div
          className={`absolute w-1/2 h-full top-0 transition-all duration-700 ease-in-out ${
            isLogin ? "left-0" : "left-1/2"
          }`}
        >
          <form
            className="flex flex-col justify-center gap-6 text-center items-center h-full px-8"
            onSubmit={handleSubmit}
          >
            <h2 className="text-4xl font-bold capitalize">
              {isLogin ? "Sign In" : "Register"}
            </h2>
            <div className="flex gap-3 my-4">
              <FontAwesomeIcon
                icon={faGoogle}
                className="text-xl border-4 border-gray-200 p-3 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-xl border-4 border-gray-200 p-3 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              />
            </div>
            <p className="text-lg capitalize text-gray-500 font-semibold">
              {isLogin
                ? "or use your username password"
                : "or use your email for registration"}
            </p>
            <input
              type="text"
              name="nombre"
              placeholder="Username"
              className="outline-0 bg-gray-200 py-2 px-5 text-2xl rounded-xl"
              onChange={handleChange}
            />
            {!isLogin && (
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="outline-0 bg-gray-200 py-2 px-5 text-2xl rounded-xl"
                onChange={handleChange}
              />
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="outline-0 bg-gray-200 py-2 px-5 text-2xl rounded-xl"
              onChange={handleChange}
            />
            {isLogin && (
              <p className="text-lg capitalize text-gray-500 font-semibold">
                Forget your password?
              </p>
            )}
            <BtnBase nombre={isLogin ? "sign in" : "sign up"} type="submit" />
          </form>
        </div>

        <div
          className={`absolute w-1/2 h-full top-0 transition-all duration-700 ease-in-out bg-indigo-700 text-white flex flex-col justify-center items-center px-10 text-center ${
            isLogin ? "left-1/2 rounded-l-[10rem]" : "left-0 rounded-r-[10rem]"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4">
            {isLogin ? "Hello, friend" : "Welcome back!"}
          </h2>
          <p className="text-white/80 mb-6">
            {isLogin
              ? "Register with your personal details to use all of site features"
              : "Already have an account? Sign in here"}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-bold transition-all duration-300 hover:bg-white hover:text-black text-sm uppercase text-white border-2 p-4 rounded-xl cursor-pointer"
          >
            {isLogin ? "sign up" : "sign in"}
          </button>
        </div>
      </div>
      {message && (
        <p className="absolute bottom-5 text-xl px-4 py-2 bg-black/80 text-white rounded-xl transition-opacity duration-300">
          {message}
        </p>
      )}
    </div>
  );
}

export default Auth;
