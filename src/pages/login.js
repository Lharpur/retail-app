// Login function works but throws Json Error

import React, { Component } from 'react'
import { Store } from 'react-notifications-component'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loggedin: false,
    }
  }

  handleUserLogin = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  handlePassLogin = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()

    var data = new FormData()
    data.append('form_post', 'login')
    data.append('email', this.state.email)
    data.append('password', this.state.password)

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
            console.log('login failed')
            localStorage.setItem('loggedIn', 'false')
            Store.addNotification({
              title: 'Login Failed!',
              message: 'Email/Password Incorrect',
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
          } else {
            console.log('login successful')
            localStorage.setItem('loggedIn', 'true')
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
          }
        })
      })
      .catch(function (err) {
        console.log('Error', err)
      })
  }

  render() {
    return (
      <div className="loginContainer">
        <form onSubmit={this.handleLoginSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            onChange={this.handleUserLogin}
            placeholder="E-mail"
          />
          <input
            type="password"
            name="password"
            onChange={this.handlePassLogin}
            placeholder="Password"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Login
