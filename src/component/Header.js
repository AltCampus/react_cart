import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

export default function Header(props) {
  return (
    <header>
      <div className="cart__text" onClick={() => props.handleCart("products")}>
        Cart
      </div>
      <div className="cart__item" onClick={() => props.handleCart("cart")}>
        <MdAddShoppingCart />
        <span className="cart__count">{props.cart.length}</span>
      </div>
    </header>
  );
}
