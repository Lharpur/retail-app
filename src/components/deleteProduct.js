import React, { Component } from "react";

class DeleteProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleDeleteProductSubmit = (event) => {
    event.preventDefault();

    var data = new FormData();

    data.append("data_fetch", "productDelete");
  };
}

export default DeleteProduct;
