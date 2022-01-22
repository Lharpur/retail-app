import React, { Component } from 'react'
import { FiLogOut } from 'react-icons/fi'

class Logout extends Component {
  handleLogoutSubmit = (event) => {
    event.preventDefault()

    var data = new FormData()
    data.append('form_post', 'logout')

    fetch('http://localhost/retail-app/server/ws.php', {
      method: 'POST',
      body: data,
    }).then(function (response) {
      if (response.status !== 200) {
        console.log('Status Code Error:' + response.status)
        return
      }

      response.json().then(function (data) {
        console.log(data)

        if (
          data.hasOwnProperty('Success') &&
          localStorage.getItem('loggedIn') === 'true'
        ) {
          console.log('Logout Successful')
          console.log(localStorage.getItem('loggedIn'))
          localStorage.setItem('loggedIn', 'false')
        } else {
          console.log('Logout Failed')
        }
      })
    })
  }
  render() {
    return (
      <FiLogOut
        className="nav-icon"
        id="logout-btn"
        onClick={this.handleLogoutSubmit}
      />
    )
  }
}

export default Logout
