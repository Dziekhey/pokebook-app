import React, { useState } from "react";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ThemeModal from "./ThemeModal";
import { useTheme } from "../services/ThemeProvider";

const TopBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { theme } = useTheme();

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
            Poké
            <span style={{ color: theme }}>book</span>
          </h1>
        </div>
        <div className="flex-grow flex mx-5 md:mx-72 relative">
          <input
            type="text"
            placeholder="Enter Pokémon name"
            className="w-full max-w-md p-2 pl-10 bg-white rounded-full border border-zinc-300 shadow-md focus:outline-none"
          />
          <button className="w-6 h-6 text-primary absolute left-3 top-1/2 transform -translate-y-1/2">
            <SearchIcon style={{ color: theme }} />
          </button>
        </div>
        <button
          className="bg- mr-6 w-5 h-4 md:w-10 md:h-10 rounded-full focus:outline-none ring-1 ring-black ring-offset-2"
          onClick={handleOpen}
          style={{ backgroundColor: theme }}
        ></button>
        <ThemeModal
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      </div>
    </>
  );
};

export default TopBar;
