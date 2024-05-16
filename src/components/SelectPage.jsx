import React from "react";

const SelectPage = ({ itemsPerPage, handlePageSizeChange }) => {
  return (
    <>
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
    </>
  );
};

export default SelectPage;
