import React, { useRef, useState } from "react";
import { checkLoginData, checkSignUpData } from "../utils/validate";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleToggleSigin = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let message;

    if (isLogin) {
      message = checkLoginData(email.current.value, password.current.value);
    } else {
      message = checkSignUpData(
        name.current.value,
        email.current.value,
        password.current.value
      );
    }

    message ? setErrorMsg(message) : setErrorMsg(null);
  };

  return (
    <div className="relative bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/e8a8e44f-ffcf-490c-ad60-b7febe7736d0/web/IN-en-20250407-TRIFECTA-perspective_0d56dee1-00dd-4425-af41-40aee72b1038_small.jpg)] bg-cover bg-center h-screen ">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-blac/20 h-screen"></div>
      <header>
        <img
          className="relative h-20 pt-3 px-14"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </header>
      <form
        onSubmit={handleSubmit}
        className="relative w-4/12 flex flex-col mx-auto gap-8 bg-black opacity-80 text-white p-12 rounded-lg"
      >
        <h1 className="font-bold text-2xl">{isLogin ? "Login" : "Sign up"}</h1>
        {!isLogin && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 h-10  bg-transparent border-white border-[1px] rounded"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="p-2 h-10  bg-transparent border-white border-[1px] rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2  h-10 bg-transparent border-white border-[1px] rounded"
        />
        {errorMsg && <p className="text-sm text-red-500">{errorMsg}</p>}
        <button
          type="submit"
          className="bg-red-700 text-white h-10 rounded font-bold"
        >
          {isLogin ? "Login" : "Sign up"}
        </button>
        <p className="text-white cursor-pointer" onClick={handleToggleSigin}>
          {isLogin ? "New to Netflix? Sign up now." : "Already a User? Login"}
        </p>
      </form>
    </div>
  );
};

export default Login;
