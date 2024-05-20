import React, { useState } from "react";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ThemeModal from "../thememodal/ThemeModal";
import { useTheme } from "../../services/ThemeProvider";
import useQueryAllPokemons from "../../hooks/useQueryAllPokemons";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { theme } = useTheme();
  const { allPokemons } = useQueryAllPokemons();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    try {
      const lowerCaseTerm = query.toLowerCase();
      const searchedPokemons = allPokemons.filter((pokemon) => {
        const namePokemons = pokemon?.name.toLowerCase() === lowerCaseTerm;
        const typePokemons = pokemon.types.some(
          (poketype) => poketype.type.name.toLowerCase() === lowerCaseTerm
        );
        return namePokemons || typePokemons;
      });

      navigate("/list-view", {
        state: { searchedPokemons },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-zinc-100 h-[80px] flex items-center relative shadow-md">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Pokebook Logo"
            className="h-12 lg:h-24 mt-10 ml-1 lg:ml-[40px]"
          />
          <h1 className="lg:text-3xl text-sm font-bold text-zinc-800 lg:mb-1">
            Poké
            <span style={{ color: theme }}>book</span>
          </h1>
        </div>
        <div className="flex-grow flex mx-3 md:mx-44 relative">
          <input
            type="search"
            placeholder="Enter Pokémon name"
            className="lg:w-full w-44 max-w-md p-2 pl-10 bg-white rounded-full border border-zinc-300 shadow-md focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="w-6 h-6 text-primary absolute left-3 top-1/2 transform -translate-y-1/2"
            onClick={handleSearch}
          >
            <SearchIcon style={{ color: theme }} />
          </button>
        </div>
        <button
          className="mr-3 w-4 h-4 md:w-10 md:h-10 rounded-full focus:outline-none ring-1 ring-black ring-offset-2"
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
