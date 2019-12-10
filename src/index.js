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
  var total = props.allData.map(item => item.price).reduce((a, c) => a + c);
  return (
    <>
      <div className="list">
        <h4>Total</h4>
        <span>{total + "$"}</span>
      </div>
    </>
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
      <button onClick={() => props.handleCartClick("checkout")}>
        Checkout
      </button>
    </div>
  );
};

const Checkout = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Phone No</label>
        <input type="phone" />
        <label htmlFor="">Address</label>
        <input type="text" />
        <label htmlFor="">State (Select)</label>
        <input type="text" />
        <label htmlFor="">Pincode</label>
        <input type="text" />
        <label htmlFor="">Radio (Home | Office)</label>
        <input type="text" />
      </form>
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
  showComponent = () => {
    switch (this.state.activePage) {
      case "products":
        return <Products handleAddToCart={this.handleAddToCart} />;
      case "cart":
        return (
          <Cart
            cartData={this.state.cart}
            handleCartClick={this.handleCartClick}
          />
        );
      case "checkout":
        return <Checkout />;

      default:
        break;
    }
  };
  render() {
    return (
      <>
        <Header cart={this.state.cart} handleCart={this.handleCartClick} />
        <div className="wrapper">{this.showComponent()}</div>
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
