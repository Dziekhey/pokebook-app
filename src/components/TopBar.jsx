import React from "react";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";

const TopBar = () => {
  return (
    <>
      <div className="bg-zinc-100 h-[80px] flex items-center relative shadow-md">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Pokebook Logo"
            className="h-[84px] mt-10 ml-[40px] object-contain "
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-800 mb-1">
            Poké<span className="text-primary">book</span>
          </h1>
        </div>
        <div className="flex-grow flex mx-5 md:mx-72 relative">
          <input
            type="text"
            placeholder="Enter Pokémon name"
            className="w-full max-w-md p-2 pl-10 bg-white rounded-full border border-zinc-300 shadow-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <button className="w-6 h-6 text-primary absolute left-3 top-1/2 transform -translate-y-1/2">
            <SearchIcon />
          </button>
        </div>
        <button className="bg-primary mr-6 w-5 h-4 md:w-10 md:h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
          <span className="sr-only">Toggle Theme</span>
        </button>
      </div>
    </>
  );
};

export default TopBar;
