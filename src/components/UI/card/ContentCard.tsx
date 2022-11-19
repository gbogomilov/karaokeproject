import React from "react";

type Props = {
  children: React.ReactNode;
};
export const ContentCard = ({ children }: Props) => {
  return (
    <div className="justify-start content-start p-6 text-white bg-gradient-to-r from-[#1c1917] to-[#3f3f46] flex w-5/6 h-5/6 self-center m-auto shadow-2xl drop-shadow-2xl rounded-l gap-3 flex-wrap overflow-y-scroll">
      {children}
    </div>
  );
};
