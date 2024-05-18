import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "../services/ThemeProvider";
import useQueryAllPokemons from "../hooks/useQueryAllPokemons";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
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
    <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Enter Pokémon name or type"
          className="w-full p-4 rounded-full bg-[#E1E1E1] border-4 focus:outline-none"
          style={{ borderColor: theme }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full"
          style={{ backgroundColor: theme }}
          onClick={handleSearch}
        >
          <SearchIcon sx={{ color: "white" }} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
