import React from "react";
import { icons } from "../../images/Icons";
import { Logout } from "../login/Logout";
import { NavButton } from "../UI/NavButton/NavButton";
import { Profile } from "../UI/Profile";
type Props = {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const NavBar = ({ isNavOpen, setIsNavOpen }: Props) => {
  const handleOpenSideBar = () => {
    setIsNavOpen(false);
  };
  return (
    <div className="relative bg-gradient-to-r from-[#1c1917] to-[#3f3f46] flex-shrink w-56 drop-shadow-xl shadow-xl p-4">
      {isNavOpen && (
        <icons.GiHamburgerMenu
          className="absolute top-2 left-2"
          size={35}
          onClick={handleOpenSideBar}
          color="white"
        />
      )}
      <Profile firstName="Georgi" lastName="Bogomilov" />
      <ul className="bg-transparent mt-4 flex flex-col gap-8">
        <NavButton>1</NavButton>
        <NavButton>2</NavButton>
        <NavButton>3</NavButton>
        <NavButton>4</NavButton>
        <NavButton>5</NavButton>
      </ul>
      <div className="absolute bottom-0 left-0 p-2">
        <Logout />
      </div>
    </div>
  );
};
