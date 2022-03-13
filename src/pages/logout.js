import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Store } from 'react-notifications-component'

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
          Store.addNotification({
            title: 'Login Successful!',
            message: 'Redirecting...',
            type: 'success',
            insert: 'top',
            container: 'bottom-right',
            animationIn: ['animate__animated', 'animate__fadeIn'],
            animationOut: ['animate__animated', 'animate__fadeOut'],
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          })
          setTimeout(() => (window.location.href = '/'), 5000)
        } else {
          Store.addNotification({
            title: 'Login Failed!',
            message: 'Logout Failed',
            type: 'danger',
            insert: 'top',
            container: 'bottom-right',
            animationIn: ['animate__animated', 'animate__fadeIn'],
            animationOut: ['animate__animated', 'animate__fadeOut'],
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          })
          setTimeout(() => (window.location.href = '/'), 5000)
        }
      })
    })
  }
  render() {
    return (
      <Link
        to="/"
        className="mobile-nav-link"
        onClick={this.handleLogoutSubmit}
      >
        Logout
      </Link>
    )
  }
}

export default Logout
