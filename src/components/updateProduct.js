import React, { Component } from "react";

class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectedProduct: [],
      title: "",
      artist: "",
      image: "",
      format: "",
      cat: "",
      label: "",
      price: "",
      releaseDate: "",
      quantity: "",
      copies_sold: "",
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleUpdateAlbumFetch = this.handleUpdateAlbumFetch.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost/retail-app/server/ws.php?data_fetch=selectPopulate")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          products: response,
        });
      })
      .catch((error) => console.log(error));
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleUpdateAlbumFetch = (event) => {
    event.preventDefault();
    const self = this;

    var data = new FormData();
    data.append("form_post", "updatePopulate");
    data.append("title", this.state.title);

    fetch(
      "http://localhost/retail-app/server/ws.php?form_post=updatePopulate",
      {
        method: "POST",
        body: data,
      }
    )
      .then(function (response) {
        if (response.status !== 200) {
          console.log("Status Code Error:" + response.status);
          return;
        }
        response.json().then(function (data) {
          self.setState({ selectedProduct: data });
        });
      })
      .catch(function (err) {
        console.log("Error", err);
      });
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleUpdateAlbumFetch}>
            <select name="" id="" onChange={this.handleTitleChange}>
              <option value="" defaultValue="Select An Album">
                Select an album
              </option>
              {this.state.products.map(function (response, index) {
                return (
                  <option key={index} value={response.title} defaultValue>
                    {response.title}
                  </option>
                );
              })}
            </select>
            <input type="submit" value="Update" />
          </form>
        </div>

        <div>
          {this.state.selectedProduct.map(function (response, index) {
            return (
              <form action="" className="AdminForm" key={index}>
                <input type="text" name="" defaultValue={response.title} />
                <input type="text" name="" defaultValue={response.artist} />
                <input type="text" name="" defaultValue={response.image} />
                <input type="text" name="" defaultValue={response.format} />
                <input type="text" name="" defaultValue={response.cat} />
                <input type="text" name="" defaultValue={response.label} />
                <input type="text" name="" defaultValue={response.price} />
                <input
                  type="text"
                  name=""
                  defaultValue={response.releaseDate}
                />
                <input type="text" name="" defaultValue={response.quantity} />
                <input
                  type="text"
                  name=""
                  defaultValue={response.copies_sold}
                />
                <input type="submit" value="Update Album" />
              </form>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UpdateProduct;
