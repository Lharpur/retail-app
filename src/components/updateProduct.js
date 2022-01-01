import React, { Component } from 'react'

class updateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        }
    }
}

export default updateProduct
