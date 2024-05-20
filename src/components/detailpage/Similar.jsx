import React from "react";
import SimilarCard from "./SimilarCard";
import useQueryAllPokemons from "../../hooks/useQueryAllPokemons";
import ripples from "../../assets/ripples.svg";

const Similar = ({ singlePokemon }) => {
  const { allPokemons, loading } = useQueryAllPokemons();

  // Extract the types of the singlePokemon
  const pokemonTypes = singlePokemon.types.map(
    (typeInfo) => typeInfo.type.name
  );

  // Filter allPokemons to get similar ones
  const similarPokemons = allPokemons.filter((pokemon) =>
    pokemon.types.some((typeInfo) => pokemonTypes.includes(typeInfo.type.name))
  );

  // Get the first 3 similar Pokémon
  const limitedPokemons = similarPokemons.slice(0, 3);

  return (
    <div className="w-full">
      <div className="flex justify-center pb-5 pt-2">
        <h1 className="font-bold text-xl">Similar</h1>
      </div>
      <div className="flex justify-center bg-gradient-to-r from-[#FFFFFF] via-[#e4e1e1] to-[#FFFFFF]">
        {loading ? (
          <img src={ripples} alt="Loading" className="size-44" />
        ) : (
          <div className="grid grid-cols-2 gap-8 py-7 md:grid-cols-2 lg:grid-cols-3 md:gap-8 ">
            {limitedPokemons.map((pokemon) => (
              <SimilarCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Similar;
