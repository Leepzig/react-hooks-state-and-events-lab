import React, { useState } from "react";

function Item({ name, category, id, items }) {

  const array = []
  const [cart, setCart] = useState([{id: 8, name: "cheese", category: "Dairy"}])

  function addToCart(id) {
    const newItem = items.find(item => item.id === id)
    console.log("before setCart:", cart)
    console.log("The newItem:",newItem)
    setCart([...cart, newItem])
    console.log([...cart, newItem])
    console.log("after setCart:", cart)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => addToCart(id)}>Add to Cart</button>
    </li>
  );
}

export default Item;
