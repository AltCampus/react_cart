import React from "react";

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Sam",
      email: "hello@example.com",
      phone: 8979879,
      fruit: "mango"
    };
  }
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    let { name, email, phone, fruit } = this.state;
    alert(name + email + phone + fruit);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              value={this.state.name}
              type="text"
              name="name"
              placeholder="Sam Rathod"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="">
            Email
            <input
              value={this.state.email}
              placeholder="example@sample.com"
              name="email"
              type="email"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="">
            PhoneNo
            <input
              value={this.state.phone}
              placeholder="+91 4325433452345"
              name="phone"
              type="number"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="">
            Fruit
            <select
              value={this.state.fruit}
              onChange={this.handleChange}
              name="fruit"
            >
              <option selected value="grapefruit">
                Grapefruit
              </option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Checkout;
