import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import PokemondCard from "../../components/PokemondCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const data = Array.from({ length: 100 }, (_, i) => i + 1); // Generating sample data

const ListView = () => {
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

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
    setCurrentPage(1); // Reset to the first page when changing the number of items per page
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const pageNumbers = [];
  const maxPageButtons = 5;
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {getPageData().map((d, index) => (
            <PokemondCard key={index} />
          ))}
        </div>
      </div>
      <div className="flex p-24 justify-between">
        <div className="flex">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="mx-1 px-2 py-1 border rounded-lg bg-[#f6ecea] text-black"
          >
            <ArrowBackIosIcon />
          </button>
          {startPage > 1 && (
            <>
              <button
                onClick={() => handleClick(1)}
                className={`mx-1 px-3 py-1 border rounded-lg ${
                  currentPage === 1
                    ? "bg-primary text-[#f6ecea]"
                    : "bg-[#f6ecea] text-black"
                }`}
              >
                1
              </button>
              {startPage > 2 && <span className="mx-1">...</span>}
            </>
          )}
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handleClick(pageNumber)}
              className={`mx-1 px-3 py-1 border rounded-lg ${
                currentPage === pageNumber
                  ? "bg-primary text-[#f6ecea]"
                  : "bg-[#f6ecea] text-black"
              }`}
            >
              {pageNumber}
            </button>
          ))}
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && <span className="mx-1">...</span>}
              <button
                onClick={() => handleClick(totalPages)}
                className={`mx-1 px-3 py-1 border rounded-lg ${
                  currentPage === totalPages
                    ? "bg-primary text-[#f6ecea]"
                    : "bg-[#f6ecea] text-black"
                }`}
              >
                {totalPages}
              </button>
            </>
          )}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="mx-1 px-2 py-1 border rounded-lg bg-[#f6ecea] text-black"
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
        <div className="flex ">
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handlePageSizeChange}
            className="border rounded px-2 py-1 bg-[#d6d0d0]"
          >
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ListView;
