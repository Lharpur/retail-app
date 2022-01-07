import React, { Component } from "react";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost/retail-app/server/ws.php?data_fetch=albumFetch")
      .then((product) => product.json())
      .then((product) => {
        this.setState({
          products: product,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <ul>
        {this.state.products.map(function (product, index) {
          return (
            <div key={index} className="productWrapper">
              <h1>{product.title}</h1>
              <img src="../images/A000001.JPG" alt="" />
              <p>{product.artist}</p>
              <p>{product.format}</p>
              <p>{product.label}</p>
              <p>Price: ${product.price}</p>
              <button>Add To Cart</button>
            </div>
          );
        })}
      </ul>
    );
  }
}
export default Products;
