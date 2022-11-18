import React from "react";

type Props = {
  firstName: string;
  lastName: string;
};
export const Profile = ({ firstName, lastName }: Props) => {
  return (
    <div className="rounded-full h-24 w-24 flex items-center justify-center bg-white m-auto font-bold text-3xl">
      {firstName[0] + lastName[0]}
    </div>
  );
};
