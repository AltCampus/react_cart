import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

export default function Header() {
  return (
    <header>
      <div>Cart</div>
      <div className="cart__item">
        <MdAddShoppingCart />
        <span>Empty</span>
      </div>
    </header>
  );
}
