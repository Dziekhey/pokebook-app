import React from "react";
import SimilarCard from "./SimilarCard";

const Similar = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-center pb-7">
          <h1 className="font-bold text-xl">Similar</h1>
        </div>
        <div className="flex justify-center w-full p-5 bg-gradient-to-r from-[#FFFFFF] via-[#e4e1e1] to-[#FFFFFF]">
          <SimilarCard />
        </div>
      </div>
    </>
  );
};

export default Similar;
