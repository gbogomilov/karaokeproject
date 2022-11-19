import React from "react";

export const KaraokeCard = () => {
  return (
    <div className="h-1/4">
      <img
        src="https://picsum.photos/200/300"
        alt=""
        className="h-28 w-28 rounded-full"
      ></img>
      <p className="text-center mt-2 text-sm">Lorem Ipsum song</p>
    </div>
  );
};
