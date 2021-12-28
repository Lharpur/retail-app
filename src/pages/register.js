import React, { Component } from "react";

const registerState = {
  fname: "",
  lname: "",
  password: "",
  cpassword: "",
  email: "",
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = registerState;
  }

  //   handleFnameChange = (event) => {
  //       this.setState({
  //           fname: event.target.value
  //       })
  //       const {fname, value } = event.target,
  //     }

  //   handleLnameChange = (event) => {
  //     this.setState({
  //         lname: event.target.value
  //     })
  //     const {lname, value } = event.target,
  // }

  // handleEmailChange = (event) => {
  //     this.setState({
  //         email: event.target.value
  //     })
  //     const {email, value } = event.target,
  // }

  // handlePassChange = (event) => {
  //     this.setState({
  //         password: event.target.value
  //     })
  //     const {password, value } = event.target,

  // }

  // handleSubmit = event => {

  //   var data = new FormData();
  //   // data.appen
  // }
  render() {
    return (
      <div>
        <form action="../server/ws.php" method="post">
          <input type="text" name="" placeholder="First Name" />
          <input type="text" name="" placeholder="Last Name" />
          <input type="email" name="" placeholder="Email" />
          <input type="password" name="" placeholder="Password" />
          <input type="password" name="" placeholder="Verify Password" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Register;
