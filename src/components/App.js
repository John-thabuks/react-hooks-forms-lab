// import React, { useState } from "react";
// import ShoppingList from "./ShoppingList";
// import Header from "./Header";
// import ItemForm from "./ItemForm"; // Import the ItemForm component
// import itemData from "../data/items";

// function App() {
//   const [items, setItems] = useState(itemData);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   function handleDarkModeClick() {
//     setIsDarkMode((isDarkMode) => !isDarkMode);
//   }

//   // Handle the form submission and update the list of items
//   const handleItemFormSubmit = (newItem) => {
//     setItems((prevItems) => [...prevItems, newItem]);
//   };

//   return (
//     <div className={"App " + (isDarkMode ? "dark" : "light")}>
//       <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
//       {/* Pass the handleItemFormSubmit function as onItemFormSubmit prop */}
//       <ItemForm onItemFormSubmit={handleItemFormSubmit} />
//       {/* Pass the updated items list to the ShoppingList component */}
//       <ShoppingList items={items} />
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;

