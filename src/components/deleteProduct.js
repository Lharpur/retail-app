// need to make default value exist in select options

import React, { Component } from 'react'
import { Store } from 'react-notifications-component'

class DeleteProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      title: '',
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost/retail-app/server/ws.php?data_fetch=selectPopulate')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          products: response,
        })
      })
      .catch((error) => console.log(error))
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    })
  }

  handleDeleteProductSubmit = (event) => {
    event.preventDefault()

    var data = new FormData()

    data.append('form_post', 'productDelete')
    data.append('title', this.state.title)

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
          Store.addNotification({
            title: 'Product Deleted From Database!',
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
        })
      })
      .catch(function (err) {
        console.log('Error', err)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleDeleteProductSubmit}>
        <select name="" id="" onChange={this.handleTitleChange}>
          <option value="" defaultValue="Select An Album">
            Select an album
          </option>
          {this.state.products.map(function (response, index) {
            return (
              <option key={index} value={response.title} defaultValue>
                {response.title}
              </option>
            )
          })}
        </select>
        <input type="submit" value="Delete" />
      </form>
    )
  }
}

export default DeleteProduct
