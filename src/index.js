import React from "react";
import { render } from "react-dom";

import data from "./data.json";
import Product from "./component/Product.js";
import "./styles/main.scss";
import "./styles/normalize.css";
import Header from "./component/Header.js";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <ul>
          {data.products.map(({ title, price }) => (
            <Product title={title} price={price} />
          ))}
        </ul>
      </div>
    </>
  );
}

render(<App />, document.getElementById("root"));
