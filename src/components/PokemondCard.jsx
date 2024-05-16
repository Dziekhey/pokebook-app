import React from "react";
import poke from "../assets/logo.png";

const PokemondCard = () => {
  return (
    <>
      <div className="h-auto w-[260px] flex flex-col mt-20 bg-white text-center items-center justify-center relative rounded-xl group transition-all duration-300">
        <div className="h-auto w-full p-3">
          <div className="bg-[#E1E1E1] h-32 items-center justify-center rounded-lg relative ">
            <img
              src={poke}
              alt="Pokemon"
              className="w-64 h-64 object-contain absolute -bottom-6 left-1/2 transform -translate-x-1/2"
            />
          </div>
          <h1 className="mt-4 text-bold text-2xl">charizard</h1>
          <div className="absolute bottom-0 left-0 right-0 font-semibold py-2 opacity-0 group-hover:opacity-100 group-hover:relative ">
            <button className=" bg-primary text-white rounded-lg px-16 py-3">View Pokémon</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemondCard;
