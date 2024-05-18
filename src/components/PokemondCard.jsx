import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DetailModal from "../pages/details/DetailView";
import useQueryPokemon from "../hooks/useQueryPokemon";
import { useTheme } from "../services/ThemeProvider";

const PokemondCard = ({ pokemon }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { singlePokemon } = useQueryPokemon(pokemon.id);
  const { theme } = useTheme();

  return (
    <>
      <div className="h-[225px] w-[260px] flex flex-col my-5 bg-white text-center items-center justify-start relative rounded-2xl group hover:h-auto hover:cursor-pointer">
        <div className="h-auto w-full p-3 flex flex-col items-center">
          <div className="bg-[#E1E1E1] h-28 w-full items-center justify-center rounded-lg relative">
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt="Pokemon"
              className="w-44 h-44 object-contain absolute -bottom-1 left-1/2 transform -translate-x-1/2"
            />
          </div>
          <h1 className="mt-4 font-bold text-2xl">{pokemon.name}</h1>
          <div className="flex">
            {pokemon.types.map((poketype) => (
              <h3
                key={poketype.type.name}
                className="mx-2 mt-3 px-3 py-1 rounded-2xl bg-[#E1E1E1]"
              >
                {poketype.type.name}
              </h3>
            ))}
          </div>

          <div className="opacity-0 group-hover:opacity-100 mt-4">
            <button
              className="text-white rounded-xl px-3 py-3 flex justify-between"
              style={{ backgroundColor: theme }}
              onClick={handleOpen}
            >
              View Pokémon
              <span className="flex pl-20 justify-end">
                <VisibilityIcon />
              </span>
            </button>
          </div>
        </div>
        <DetailModal
          open={open}
          handleClose={handleClose}
          singlePokemon={singlePokemon}
        />
      </div>
    </>
  );
};

export default PokemondCard;
