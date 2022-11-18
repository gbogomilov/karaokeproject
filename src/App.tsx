import { Routers } from "./routes/Routes";
import { useSelector } from "react-redux";
import { UserState } from "./globalState/types/userStateType";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginChecker } from "./utilityFunctions/loginChecker";
export const App = () => {
  const { user } = useSelector((state: UserState) => state);
  const navigate = useNavigate();
  useEffect(() => {
    loginChecker(user, navigate);
  }, [user.isLoggedIn]);
  return (
    <>
      <Routers />
    </>
  );
};
