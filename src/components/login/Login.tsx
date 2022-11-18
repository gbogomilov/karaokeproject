import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebaseConfig";
import { userActions } from "../../globalState/store/store";
import { useDispatch } from "react-redux";
import React from "react";
import { Card } from "../UI/card/Card";

export const Login = () => {
  const dispatch = useDispatch();
  const loginHandler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      //const token = credential?.accessToken;
      const user = result.user;
      const accessToken = await user.getIdTokenResult().then((token) => token);
      const userInfo = {
        displayName: user.displayName,
        firstName: user.displayName?.split(" ")[0],
        lastName: user.displayName?.split(" ")[1],
        email: user.email,
        token: accessToken.token,
      };
      console.log(userInfo);
      dispatch(userActions.setUserInfo(userInfo));
      document.cookie = `accessToken=${accessToken.token}`;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };

  return (
    <Card>
      <button
        className="h-1/8 w-1/6 flex justify-self-center self-center justify-center m-auto bg-white rounded-md p-4 text-xl"
        onClick={loginHandler}
      >
        Login
      </button>
    </Card>
  );
};
