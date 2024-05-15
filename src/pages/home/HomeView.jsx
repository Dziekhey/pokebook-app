import React from 'react';
import logo from '../../assets/logo.png';
import SearchBar from '../../components/SearchBar';
import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <>
      <div className="flex flex-col bg-[#E1E1E1] items-center justify-center min-h-screen px-4 md:px-8">
        <div className="text-center items-center flex flex-col">
          <img src={logo} alt="Pokémon Logo" className="w-64 h-40 md:w-96 md:h-64 mt-4" />
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Poké <span className="text-primary">book</span>
          </h1>
          <p className="mb-6 text-sm md:text-base">
            Largest Pokémon index with information <br /> about every Pokemon you can think of.
          </p>
          <div className="flex justify-center gap-4 mb-4 w-full max-w-md">
            <SearchBar />
          </div>
          <Link to='/list-view'>
          <button className="underline">
            View all
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeView;
