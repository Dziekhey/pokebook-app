import React from "react";
import poke from "../assets/logo.png";
import VisibilityIcon from '@mui/icons-material/Visibility';

const PokemondCard = () => {
  return (
    <>
    <div className="h-[200px] w-[260px] flex flex-col my-5 bg-white text-center items-center justify-start relative rounded-2xl group hover:h-auto hover:cursor-pointer">
      <div className="h-auto w-full p-3 flex flex-col items-center">
        <div className="bg-[#E1E1E1] h-32 w-full items-center justify-center rounded-lg relative">
          <img
            src={poke}
            alt="Pokemon"
            className="w-64 h-64 object-contain absolute -bottom-6 left-1/2 transform -translate-x-1/2"
          />
        </div>
        <h1 className="mt-4 text-bold text-2xl">charizard</h1>
        <div className="opacity-0 group-hover:opacity-100 mt-4">
          <button className="bg-primary text-white rounded-xl px-3 py-3 flex justify-between">View Pokémon<span className="flex pl-20 justify-end"><VisibilityIcon /></span></button>
        </div>
      </div>
    </div>
    </>
  );
};

export default PokemondCard;
