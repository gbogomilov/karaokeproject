import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};
export const NavButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-[#be123c] to-[#881337] hover:opacity-60 flex-shrink rounded-lg h-8 shadow drop-shadow-xl"
    >
      {children}
    </button>
  );
};
