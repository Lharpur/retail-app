// Login function works but throws Json Error

import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loggedin: false,
    };
  }

  handleUserLogin = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePassLogin = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleLoginSubmit = (event) => {
    event.preventDefault();

    var data = new FormData();
    data.append("form_post", "login");
    data.append("email", this.state.email);
    data.append("password", this.state.password);

    fetch("http://localhost/retail-app/server/ws.php", {
      method: "POST",
      body: data,
    })
      .then(function (response) {
        if (response.status !== 200) {
          console.log("Status Code Error:" + response.status);
          return;
        }

        response.json().then(function (data) {
          console.log(data);

          if (data.hasOwnProperty("error")) {
            console.log("login failed");
            localStorage.setItem("loggedIn", "false");
          } else {
            console.log("login successful");
            localStorage.setItem("loggedIn", "true");
          }
        });
      })
      .catch(function (err) {
        console.log("Error", err);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleLoginSubmit}>
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
        <input type="submit" placeholder="Submit" />
      </form>
    );
  }
}

export default Login;
