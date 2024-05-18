import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "../services/ThemeProvider";

const SearchBar = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl relative">
        <div className="relative">
          <input
            type="search"
            placeholder="Enter Pokémon name"
            className="w-full p-4 rounded-full bg-[#E1E1E1] border-4 focus:outline-none"
            style={{ borderColor: theme }}
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full"
            style={{ backgroundColor: theme }}
          >
            <SearchIcon sx={{ color: "white" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
