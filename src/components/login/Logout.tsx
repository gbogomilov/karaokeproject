import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebaseConfig";
import { useDispatch } from "react-redux";
import { userActions } from "../../globalState/store/store";

export const Logout = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log("asdf");
    signOut(auth)
      .then(() => {
        dispatch(userActions.clearUserInfo());
        document.cookie = `accessToken=`;
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <button onClick={handleLogout} className="text-white h-1/6 m-auto">
      Logout
    </button>
  );
};
