import React from "react";
import { icons } from "../../images/Icons";
import { Card } from "../UI/card/Card";
import { ContentCard } from "../UI/card/ContentCard";
import { KaraokeCard } from "../UI/card/KaraokeCard";
type Props = {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Content = ({ isNavOpen, setIsNavOpen }: Props) => {
  const handleOpenSideBar = () => {
    setIsNavOpen(true);
  };
  return (
    <>
      {!isNavOpen && (
        <div className="p-2 absolute">
          <icons.GiHamburgerMenu size={35} onClick={handleOpenSideBar} />
        </div>
      )}
      <ContentCard>
        <KaraokeCard />
      </ContentCard>
    </>
  );
};
