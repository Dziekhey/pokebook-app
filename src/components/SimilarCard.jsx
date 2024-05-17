import React from "react";
import logo from "../assets/logo.png";

const SimilarCard = () => {
  return (
    <>
      <div className="w-[190px] flex flex-col bg-white text-center rounded-2xl items-center justify-start relative">
        <div className="h-auto w-full p-2 flex flex-col items-center">
          <div className="bg-[#E1E1E1] h-20 w-full items-center justify-center rounded-xl relative">
            <img
              src={logo}
              alt="Pokemon"
              className="w-32 h-32 object-contain absolute -bottom-1 left-1/2 transform -translate-x-1/2"
            />
          </div>
          <h1 className="mt-2 font-semibold text-lg">Name</h1>
        </div>
      </div>
    </>
  );
};

export default SimilarCard;
