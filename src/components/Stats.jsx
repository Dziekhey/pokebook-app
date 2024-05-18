import React from "react";
import { useTheme } from "../services/ThemeProvider";

const Stats = ({ singlePokemon }) => {
  const { theme } = useTheme();

  return (
    <>
      <div className="w-[80%]">
        <div className="flex justify-center pb-5 pt-2">
          <h1 className="font-bold text-xl">Stats</h1>
        </div>
        <div className="flex w-full px-3 py-2 bg-gradient-to-r from-[#FFFFFF] via-[#e4e1e1] to-[#FFFFFF]">
          <div className="space-y-2 w-[40%] flex flex-col">
            <p>Hp</p>
            <p>Attack</p>
            <p>Defense</p>
            <p>Special Attack</p>
            <p>Special Defense</p>
            <p>Speed</p>
          </div>
          <div className="space-y-5 mt-3 w-[80%] pl-5 flex flex-col">
            {singlePokemon.stats.map((pokestats) => (
              <div
                key={pokestats.base_stat}
                className="w-[60%] bg-zinc-400 rounded-full h-2.5 mx-2"
              >
                <div
                  className="h-2.5 rounded-full"
                  style={{
                    width: `${pokestats.base_stat}%`,
                    backgroundColor: theme,
                  }}
                ></div>
              </div>
            ))}
          </div>
          <div className="space-y-2 w-[10%] flex flex-col">
            {singlePokemon.stats.map((pokestats) => (
              <p key={pokestats.base_stat}>{pokestats.base_stat}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
