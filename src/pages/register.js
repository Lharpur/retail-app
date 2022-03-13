import React, { Component } from 'react'
import { Store } from 'react-notifications-component'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      password: '',
      cpassword: '',
      email: '',
    }
  }

  handleFnameChange = (event) => {
    this.setState({
      fname: event.target.value,
    })
  }

  handleLnameChange = (event) => {
    this.setState({
      lname: event.target.value,
    })
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  handlePassChange = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  handleCpassChange = (event) => {
    this.setState({
      verify_password: event.target.value,
    })
  }

  handleRegistrationSubmit = (event) => {
    event.preventDefault()

    var data = new FormData()
    data.append('form_post', 'register')
    data.append('fname', this.state.fname)
    data.append('lname', this.state.lname)
    data.append('password', this.state.password)
    data.append('verify_password', this.state.verify_password)
    data.append('email', this.state.email)

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
        if (data.hasOwnProperty('Error')) {
          Store.addNotification({
            title: 'Registration Failed!',
            message: 'Check input fields and try again...',
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
            title: 'Registration Successful',
            message: 'Welcome To Heliacal Records...',
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
          setTimeout(() => (window.location.href = '/login'), 5000)
        }
      })
    })
  }
  render() {
    return (
      <div className="registrationContainer">
        <form onSubmit={this.handleRegistrationSubmit}>
          <h2>Registration</h2>
          <input
            type="text"
            name="fname"
            onChange={this.handleFnameChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lname"
            onChange={this.handleLnameChange}
            placeholder="Last Name"
          />
          <input
            type="email"
            name="email"
            onChange={this.handleEmailChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            onChange={this.handlePassChange}
            placeholder="Password"
          />
          <input
            type="password"
            name="cpassword"
            onChange={this.handleCpassChange}
            placeholder="Verify Password"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Register
