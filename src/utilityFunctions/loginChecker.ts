import { NavigateFunction } from "react-router-dom";
import { UserType } from "../globalState/types/userStateType";

export const loginChecker = (user: UserType, navigate: NavigateFunction) =>
  user.isLoggedIn ? navigate("/dashboard") : navigate("/login");
