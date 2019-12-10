import React from "react";
import { AiOutlineDollar, AiOutlineShoppingCart } from "react-icons/ai";

export default function Product(props) {
  return (
    <li className="list" key={props.id}>
      <h4>{props.title}</h4>
      <div style={{ display: "flex" }}>
        <span>
          {props.price} <AiOutlineDollar />
        </span>
        <button
          onClick={() =>
            props.handleAddToCart({
              title: props.title,
              id: props.id,
              price: props.price
            })
          }
        >
          Add To Cart <AiOutlineShoppingCart />
        </button>
      </div>
    </li>
  );
}
