import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  if (!user) return;

  const { displayName, photoURL } = user;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between items-center px-8">
      <div>
        <img
          className="w-[200px]"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <div className="flex  gap-3 rounded">
        <div className="flex flex-col items-center">
          <img
            src={photoURL}
            className="h-10 w-10 rounded-[50%] border-[5px] border-red-500"
            alt="profile"
          />
          <p className="text-red-500 font-bold">{displayName}</p>
        </div>
        <button
          onClick={handleSignOut}
          className="text-white bg-red-700 px-4 py-2 rounded font-bold h-12"
        >
          Signout
        </button>
      </div>
    </div>
  );
};

export default Header;
