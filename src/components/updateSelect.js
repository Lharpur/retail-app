import React, { Component } from "react";

class UpdateSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectedProduct: [],
    };
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
    );
  }
}

export default UpdateSelect;
