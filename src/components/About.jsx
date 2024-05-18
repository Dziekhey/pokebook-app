import React from "react";

const About = ({ singlePokemon }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full">
          <div className="flex justify-center pb-7">
            <h1 className="font-bold text-xl">About</h1>
          </div>
          <div className="flex w-full px-10 py-5 bg-gradient-to-r from-[#FFFFFF] via-[#f1efef] to-[#FFFFFF]">
            <div className="space-y-3 px-10 flex flex-col">
              <p>Height</p>
              <p>Weight</p>
              <p>Abilities</p>
            </div>
            <div className="space-y-3 px-10 flex flex-col">
              <p>{singlePokemon.height}m</p>
              <p>{singlePokemon.weight}kg</p>
              <div className="flex">
                <ul className="list-disc pl-5">
                  {singlePokemon.abilities.map((poke_ability) => (
                    <li key={poke_ability.ability.name}>
                      {poke_ability.ability.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
