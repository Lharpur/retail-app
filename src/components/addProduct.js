import React, { Component } from 'react'
import { Store } from 'react-notifications-component'

class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      artist: '',
      image: '',
      format: '',
      cat: '',
      label: '',
      price: '',
      releaseDate: '',
      quantity: '',
      copies_sold: '',
    }
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    })
  }
  handleArtistChange = (event) => {
    this.setState({
      artist: event.target.value,
    })
  }
  handleImageChange = (event) => {
    this.setState({
      image: event.target.files[0],
    })
  }
  handleFormatChange = (event) => {
    this.setState({
      format: event.target.value,
    })
  }
  handleCatChange = (event) => {
    this.setState({
      cat: event.target.value,
    })
  }
  handleLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    })
  }
  handlePriceChange = (event) => {
    this.setState({
      price: event.target.value,
    })
  }
  handleReleaseDateChange = (event) => {
    this.setState({
      releaseDate: event.target.value,
    })
  }
  handleQuantityChange = (event) => {
    this.setState({
      quantity: event.target.value,
    })
  }
  handleCopiesSoldChange = (event) => {
    this.setState({
      copies_sold: event.target.value,
    })
  }

  handleAddProductSubmit = (event) => {
    event.preventDefault()

    var data = new FormData()
    data.append('form_post', 'addAlbum')
    data.append('title', this.state.title)
    data.append('artist', this.state.artist)
    data.append('file', this.state.image)
    data.append('format', this.state.format)
    data.append('cat', this.state.cat)
    data.append('label', this.state.label)
    data.append('price', this.state.price)
    data.append('releaseDate', this.state.releaseDate)
    data.append('quantity', this.state.quantity)
    data.append('copies_sold', this.state.copies_sold)

    fetch('http://localhost/retail-app/server/ws.php', {
      method: 'POST',
      body: data,
    })
      .then(function (response) {
        if (response.status !== 200) {
          console.log('Status Code Error:' + response.status)
          return
        }

        response.json().then(function (data) {
          console.log(data)
          if (data.hasOwnProperty('Error')) {
            Store.addNotification({
              title: 'Failed To Add Product',
              message: 'Please check fields and try again...',
              type: 'danger',
              insert: 'top',
              container: 'bottom-right',
              animationIn: ['animate__animated', 'animate__fadeIn'],
              animationOut: ['animate__animated', 'animate__fadeOut'],
              dismiss: {
                duration: 3000,
                onScreen: true,
              },
            })
          } else {
            Store.addNotification({
              title: 'Product Added To Database',
              message: '',
              type: 'success',
              insert: 'top',
              container: 'bottom-right',
              animationIn: ['animate__animated', 'animate__fadeIn'],
              animationOut: ['animate__animated', 'animate__fadeOut'],
              dismiss: {
                duration: 3000,
                onScreen: true,
              },
            })
          }
        })
      })
      .catch(function (err) {
        console.log('Error', err)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleAddProductSubmit} className="adminForm">
        <input
          aria-label="form-field"
          type="text"
          name="title"
          onChange={this.handleTitleChange}
          placeholder="Title"
        />
        <input
          aria-label="form-field"
          type="text"
          name="artist"
          onChange={this.handleArtistChange}
          placeholder="Artist"
        />
        <input
          aria-label="form-field"
          type="file"
          name="image"
          onChange={this.handleImageChange}
          placeholder="File"
        />
        <input
          aria-label="form-field"
          type="text"
          name="format"
          onChange={this.handleFormatChange}
          placeholder="Format"
        />
        <input
          aria-label="form-field"
          type="text"
          name="cat"
          onChange={this.handleCatChange}
          placeholder="Cat"
        />
        <input
          aria-label="form-field"
          type="text"
          name="label"
          onChange={this.handleLabelChange}
          placeholder="Label"
        />
        <input
          aria-label="form-field"
          type="number"
          name="price"
          onChange={this.handlePriceChange}
          placeholder="Price"
        />
        <input
          aria-label="form-field"
          type="number"
          name="releaseDate"
          onChange={this.handleReleaseDateChange}
          placeholder="Release Date"
        />
        <input
          aria-label="form-field"
          type="number"
          name="quantity"
          onChange={this.handleQuantityChange}
          placeholder="Quantity"
        />
        <input
          aria-label="form-field"
          type="number"
          name="copies_sold"
          onChange={this.handleCopiesSoldChange}
          placeholder="Copies Sold"
        />
        <input aria-label="form-field" type="submit" value="Submit" />
      </form>
    )
  }
}
export default AddProduct
