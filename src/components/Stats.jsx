import React from "react";

const Stats = ({ singlePokemon }) => {
  return (
    <>
      <div className="w-[80%]">
        <h2 className="text-lg font-bold mb-4 pl-48">Stats</h2>
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
                className="w-[60%] bg-zinc-400 rounded-full h-2.5 mx-2 "
              >
                <div
                  className="bg-pink-500 h-2.5 rounded-full"
                  style={{ width: `${pokestats.base_stat}%` }}
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

/*
<div className="w-[80%]">
<h2 className="text-lg font-bold mb-4 pl-48">Stats</h2>
<div className="flex w-full px-3 bg-gradient-to-r from-[#FFFFFF] via-[#e4e1e1] to-[#FFFFFF]">
  <div className="space-y-2 w-[40%] flex flex-col">
    {singlePokemon.stats.map((pokestats) => (
      <p key={pokestats.stat.name}>{pokestats.stat.name}</p>
    ))}
  </div>
  <div className="space-y-5 mt-3 w-[80%] flex flex-col">
    {singlePokemon.stats.map((pokestats) => (
      <div
        key={pokestats.base_stat}
        className="w-[60%] bg-zinc-400 rounded-full h-2.5 mx-2 my-2"
      >
        <div
          className="bg-pink-500 h-2.5 rounded-full"
          style={{ width: `${pokestats.base_stat}%` }}
        ></div>
        <span>{pokestats.base_stat}</span>
      </div>
    ))}
    <div className="w-[60%] bg-zinc-400 rounded-full h-2.5  mx-2">
      <div className="bg-pink-500 h-2.5 rounded-full w-[60%]"></div>
    </div>
    <div className="w-[60%] bg-zinc-400 rounded-full h-2.5 mx-2">
      <div className="bg-pink-500 h-2.5 rounded-full w-[62%]"></div>
    </div>
    <div className="w-[60%] bg-zinc-400 rounded-full h-2.5  mx-2">
      <div className="bg-pink-500 h-2.5 rounded-full w-[63%]"></div>
    </div>
    <div className="w-[60%] bg-zinc-400 rounded-full h-2.5  mx-2">
      <div className="bg-pink-500 h-2.5 rounded-full w-[80%]"></div>
    </div>
    <div className="w-[60%] bg-zinc-400 rounded-full h-2.5  mx-2">
      <div className="bg-pink-500 h-2.5 rounded-full w-[80%]"></div>
    </div>
    <div className="w-[60%] bg-zinc-400 rounded-full h-2.5  mx-2">
      <div className="bg-pink-500 h-2.5 rounded-full w-[60%]"></div>
    </div>
  </div>
  <div className="space-y-2 w-[10%] flex flex-col">
    <p>60</p>
    <p>50</p>
    <p>80</p>
    <p>70</p>
    <p>30</p>
    <p>40</p>
  </div> 
</div>
</div>*/
