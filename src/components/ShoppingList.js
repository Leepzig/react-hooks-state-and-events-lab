import React, {useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [cart, setCart] = useState([])
  const [selectedCategory, setCategory] = useState("All")

  //setting category function

  //adding new item to cart function
  function addToCart(id) {
    const newItem = items.find(item => item.id === id)
    setCart(() => [...cart, newItem])
  }

  const array = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory)
  console.log(array)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => setCategory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {array.map((item) => (
          <Item 
          key={item.id} 
          name={item.name} 
          category={item.category} 
          id={item.id} 
          items={items}
          cart={cart}
          addToCart={addToCart}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
