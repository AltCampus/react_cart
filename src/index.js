import React from "react";
import { render } from "react-dom";

import data from "./data.json";
import Product from "./component/Product.js";
import "./styles/main.scss";
import "./styles/normalize.css";
import Header from "./component/Header.js";

const Products = props => (
  <ul>
    {data.products.map(product => (
      <Product {...product} handleAddToCart={props.handleAddToCart} />
    ))}
  </ul>
);

const Total = props => {
  let total = props.allData.map(item => item.price).reduce((a, c) => a + c);
  return (
    <div className="list">
      <h4>Total</h4>
      <span>{total + "$"}</span>
    </div>
  );
};

const Cart = props => {
  return (
    <div>
      <ul>
        {props.cartData.map(item => (
          <li className="list">
            <h4>{item.title}</h4>
            <span>{item.price + " $"}</span>
          </li>
        ))}
      </ul>
      <hr />
      <Total allData={props.cartData} />
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      activePage: "products"
    };
  }
  handleAddToCart = id => {
    this.setState({ cart: this.state.cart.concat(id) });
  };

  handleCartClick = comp => {
    this.setState({ activePage: comp });
  };
  render() {
    return (
      <>
        <Header cart={this.state.cart} handleCart={this.handleCartClick} />
        <div className="wrapper">
          {this.state.activePage === "products" ? (
            <Products handleAddToCart={this.handleAddToCart} />
          ) : (
            <Cart cartData={this.state.cart} />
          )}
        </div>
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
