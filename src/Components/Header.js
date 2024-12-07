import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../Utilities/firebase";
import { removeUser } from "../Store/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        Navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black px-4 py-3 z-10 w-full flex justify-between">
      <img
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        width="200px"
        height="100px"
      ></img>
      {user && (
        <div className="flex gap-5 h-10 mt-5">
          <img
            alt="userProfile"
            src="https://avatars.githubusercontent.com/u/49281527?v=4"
            className="w-15 h-15"
          ></img>
          <button
            className="bg-[#e50914] p-2 rounded-md text-white font-bold"
            onClick={() => handleSignout()}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
