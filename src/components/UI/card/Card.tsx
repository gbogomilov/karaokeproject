import React from "react";

type Props = {
  children: React.ReactNode;
};
export const Card = ({ children }: Props) => {
  return (
    <div className="flex flex-row bg-[#6b7280] flex-grow h-screen w-screen">
      {children}
    </div>
  );
};
