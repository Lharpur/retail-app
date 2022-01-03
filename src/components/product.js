import React, { Component } from "react";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8888/retail-app/server/ws.php?data_fetch=albumFetch")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          products: response,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <ul>
        {this.state.products.map(function (response, index) {
          return (
            <div key={index} className="productWrapper">
              <h1>{response.title}</h1>
              <img src="../images/A000001.JPG" alt="" />
              <p>{response.artist}</p>
              <p>{response.format}</p>
              <p>{response.label}</p>
              <p>Price: ${response.price}</p>
            </div>
          );
        })}
      </ul>
    );
  }
}
export default Products;
