import React, { useState, useEffect } from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  const [searchText, setSearchText] = useState(search || ""); // Initialize with the value of the 'search' prop

  useEffect(() => {
    // Update the state when the 'search' prop changes
    setSearchText(search || "");
  }, [search]);

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          onSearchChange(e.target.value);
        }}
      />
      <select name="filter" onChange={onCategoryChange}>
        {/* ... */}
      </select>
    </div>
  );
}

export default Filter;



