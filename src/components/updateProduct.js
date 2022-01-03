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
        this.handleUpdateAlbumFetch = this.handleUpdateAlbumFetch.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        // this.handleUpdateAlbumSubmit = this.handleUpdateAlbumSubmit.bind(this);
        // this.handleArtistChange = this.handleArtistChange.bind(this);
        // this.handleImageChange = this.handleImageChange.bind(this);
        // this.handleFormatChange = this.handleFormatChange.bind(this);
        // this.handleCatChange = this.handleCatChange.bind(this);
        // this.handleLabelChange = this.handleLabelChange.bind(this);
        // this.handlePriceChange = this.handlePriceChange.bind(this);
        // this.handleReleaseDateChange = this.handleReleaseDateChange.bind(this);
        // this.handleQuantityChange = this.handleQuantityChange.bind(this);
        // this.handleCopiesSoldChange = this.handleCopiesSoldChange.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8888/retail-app/server/ws.php?data_fetch=selectPopulate")
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
    handleTitle2Change(event) {
        this.setState({
            title: event.target.value,
        });
    }
    handleArtistChange(event) {
        this.setState({
            artist: event.target.value,
        });
    }
    handleImageChange(event) {
        this.setState({
            image: event.target.value,
        });
    }
    handleFormatChange(event) {
        this.setState({
            format: event.target.value,
        });
    }
    handleCatChange(event) {
        this.setState({
            cat: event.target.value,
        });
    }
    handleLabelChange(event) {
        this.setState({
            label: event.target.value,
        });
    }
    handlePriceChange(event) {
        this.setState({
            price: event.target.value,
        });
    }
    handleReleaseDateChange(event) {
        this.setState({
            releaseDate: event.target.value,
        });
    }
    handleQuantityChange(event) {
        this.setState({
            quantity: event.target.value,
        });
    }
    handleCopiesSoldChange(event) {
        this.setState({
            copies_sold: event.target.value,
        });
    }


    handleUpdateAlbumFetch = (event) => {
        event.preventDefault();
        const self = this;

        var data = new FormData();
        data.append("form_post", "updatePopulate");
        data.append("title", this.state.title);

        fetch(
            "http://localhost:8888/retail-app/server/ws.php?form_post=updatePopulate",
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

    handleUpdateAlbumSubmit = (event) => {
        event.preventDefault();

        var data = new FormData();
        data.append("update_request", "updateAlbum");
        data.append("title", this.state.title);
        data.append("artist", this.state.artist);
        data.append("image", this.state.image);
        data.append("format", this.state.format);
        data.append("cat", this.state.cat);
        data.append("label", this.state.label);
        data.append("price", this.state.price);
        data.append("releaseDate", this.state.releaseDate);
        data.append("quantity", this.state.quantity);
        data.append("copies_sold", this.state.copies_sold);

        fetch("http://localhost:8888/retail-app/server/ws.php", {
            method: "UPDATE",
            body: data,
        })
            .then(function (response) {
                if (response.status !== 200) {
                    console.log("Status Code Error:" + response.status);
                    return;
                }

                response.json().then(function (data) {
                    console.log(data);
                });
            })
            .catch(function (err) {
                console.log("Error", err);
            })
    }

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
                <div>
                    {this.state.selectedProduct.map(function (response, index) {
                        return (
                            <form
                                //onSubmit={this.handleUpdateAlbumSubmit.bind(this)}
                                className="AdminForm" key={index}>
                                <input type="text" name="title"
                                    //onChange={this.handleTitle2Change}
                                    value={response.title} />
                                <input type="text" name="artist"
                                    // onChange={this.handleArtistChange}
                                    value={response.artist} />
                                <input type="text" name="image"
                                    // onChange={this.handleImageChange}
                                    value={response.image} />
                                <input type="text" name="format"
                                    // onChange={this.handleFormatChange}
                                    value={response.format} />
                                <input type="text" name="cat"
                                    // onChange={this.handleCatChange}
                                    value={response.cat} />
                                <input type="text" name="label"
                                    // onChange={this.handleLabelChange}
                                    value={response.label} />
                                <input type="number" name="price"
                                    // onChange={this.handlePriceChange}
                                    value={response.price} />
                                <input
                                    type="number"
                                    name="releaseDate"
                                    // onChange={this.handleReleasedateChange}

                                    value={response.releaseDate}
                                />
                                <input type="number" name="quantity"
                                    // onChange={this.handleQuantityChange}
                                    value={response.quantity} />
                                <input
                                    type="number"
                                    name="copies_sold"
                                    // onChange={this.handleCopiesSoldChange}

                                    value={response.copies_sold}
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
