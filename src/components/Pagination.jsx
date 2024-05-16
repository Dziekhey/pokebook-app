import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Pagination = ({
  handlePrevPage,
  currentPage,
  startPage,
  endPage,
  totalPages,
  handleClick,
  pageNumbers,
  handleNextPage,
}) => {
  return (
    <>
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
    </>
  );
};

export default Pagination;
