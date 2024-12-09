import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidation } from "../Utilities/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utilities/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const nameValue = name.current ? name.current.value : "";
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const isValidCreds = checkValidation(
      isSignInForm,
      nameValue,
      emailValue,
      passwordValue
    );
    if (isValidCreds) {
      setErrorMessage(isValidCreds);
      return;
    }
    setErrorMessage("");

    if (isValidCreds) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    if (isSignInForm) {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
    if (name.current) name.current.value = "";
    email.current.value = "";
    password.current.value = "";
    setErrorMessage("");
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_large.jpg"
        />
      </div>
      <form
        className="absolute p-10 bg-black my-40 w-1/4 mx-auto right-0 left-0 rounded-lg shadow-lg opacity-85 text-white"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p className="text-3xl font-bold pb-3">
          {isSignInForm ? "Sign In!" : "Sign Up!"}
        </p>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="my-3 p-2 bg-gray-700 rounded-md w-full focus:border-2 focus:border-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="my-3 p-2 bg-gray-700 rounded-md w-full focus:border-2 focus:border-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" my-3 p-2 bg-gray-700 rounded-md w-full focus:border-2 focus:border-white"
        />
        <p className="text-[#e50914] shadow-md">
          {errorMessage ? errorMessage : ""}
        </p>
        <button
          className="bg-[#e50914] p-2 my-3 rounded-md w-full"
          onClick={() => handleButtonClick()}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-3 ">
          {isSignInForm ? "New to Netflix? " : "Already a user? "}
          <span
            className="hover:underline cursor-pointer text-lg text-white font-semibold"
            onClick={() => toggleSignInform()}
          >
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
