import React from "react";

function Item({ name, category, id, cart, addToCart }) {

  cart.find(item => item.id === id)

  return (
    <li className={cart.find(item => item.id === id) ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => addToCart(id)}>Add to Cart</button>
    </li>
  );
}

export default Item;
