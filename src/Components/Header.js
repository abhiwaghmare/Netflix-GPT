import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utilities/firebase";
import { addUser, removeUser } from "../Store/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO, USER_AVATAR } from "../Utilities/Constants";
import { showGptSearch } from "../Store/GPTSlice";

const Header = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTPage = useSelector((store) => store.gpt.showGPTPage);

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

  const toggleGptSearch = () => {
    dispatch(showGptSearch());
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        Navigate("/browse");
      } else {
        dispatch(removeUser());
        Navigate("/");
      }
    });
  }, []);
  return (
    <div className="absolute bg-gradient-to-b from-black px-4 py-3 z-10 w-full flex justify-between items-center">
      <img alt="logo" src={LOGO} width="160px" height="80px"></img>
      {user && (
        <div className="flex gap-5 h-10 mt-5">
          <button
            onClick={() => toggleGptSearch()}
            className="bg-red-700 text-white py-2 px-4 rounded-lg shadow-md"
          >
            {!showGPTPage ? "GPT Search" : "HomePage"}
          </button>
          <img alt="userProfile" src={USER_AVATAR} className="w-15 h-15"></img>
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
