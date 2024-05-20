import React, { useState } from "react";
import TopBar from "../../components/listpage/TopBar";
import PokemondCard from "../../components/listpage/PokemondCard";
import useQueryAllPokemon from "../../hooks/useQueryAllPokemons";
import Pagination from "../../components/listpage/Pagination";
import PageSelector from "../../components/listpage/PageSelector";
import ripples from "../../assets/ripples.svg";
import nodata from "../../assets/nodata.svg";
import { useLocation } from "react-router-dom";

const ListView = () => {
  const { allPokemons, loading } = useQueryAllPokemon();
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();
  // Use searchResults if available, otherwise use allPokemons
  const searchResults = location.state?.searchedPokemons || allPokemons;

  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageSizeChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    // Reset to the first page when changing the number of items per page
    setCurrentPage(1);
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return searchResults.slice(startIndex, endIndex);
  };

  const pageNumbers = [];
  const maxPageButtons = 4;
  const halfMaxButtons = Math.floor(maxPageButtons / 2);

  let startPage = Math.max(1, currentPage - halfMaxButtons);
  let endPage = Math.min(totalPages, currentPage + halfMaxButtons);

  if (endPage - startPage + 1 < maxPageButtons) {
    if (currentPage <= halfMaxButtons) {
      endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
    } else if (currentPage + halfMaxButtons >= totalPages) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <TopBar />
      <div className="flex justify-center m-5 md:p-10">
        {loading ? (
          <img src={ripples} alt="Loading" className="size-96" />
        ) : searchResults.length === 0 ? (
          <div>
            <h1 className="font-bold text-2xl pb-5">No Pokemon Found</h1>
            <img src={nodata} alt="Pokemon not found" className="size-80" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {getPageData().map((pokemon) => (
              <PokemondCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}
      </div>
      <div className="px-2 flex lg:px-24 pb-6 justify-between">
        <div className="flex ">
          <Pagination
            handlePrevPage={handlePrevPage}
            currentPage={currentPage}
            startPage={startPage}
            endPage={endPage}
            totalPages={totalPages}
            handleClick={handleClick}
            pageNumbers={pageNumbers}
            handleNextPage={handleNextPage}
          />
        </div>
        <div>
          <PageSelector
            itemsPerPage={itemsPerPage}
            handlePageSizeChange={handlePageSizeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ListView;
