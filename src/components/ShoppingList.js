import React, { useState } from "react";
import ItemForm from "./ItemForm";

const ShoppingList = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (search) => {
    setSearchText(search);
  };

  const itemsToDisplay = items.filter((item) => {
    const categoryCondition =
      selectedCategory === "All" || item.category === selectedCategory;
    const searchCondition = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return categoryCondition && searchCondition;
  });

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="ShoppingList">
      <ItemForm onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      {/* Adding the input field in the ShoppingList */}
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
