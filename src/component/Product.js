import React from "react";
import { AiOutlineDollar, AiOutlineShoppingCart } from "react-icons/ai";

export default function Product({ title, price }) {
  return (
    <li className="list">
      <h4>{title}</h4>
      <span>
        {price} <AiOutlineDollar />
      </span>
      <button>
        Add To Cart <AiOutlineShoppingCart />
      </button>
    </li>
  );
}
