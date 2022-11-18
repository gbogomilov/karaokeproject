import { useState } from "react";
import { Content } from "./Content";
import { NavBar } from "../Navigation/NavBar";
import { Login } from "../../components/login/Login";
import { Card } from "../UI/card/Card";
export const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <Card>
      {isNavOpen && (
        <NavBar setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
      )}
      <Content setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
    </Card>
  );
};
