import React, { Component } from "react";

class Logout extends Component {
  handleLogoutSubmit = (event) => {
    event.preventDefault();

    var data = new FormData();
    data.append("form_post", "logout");

    fetch("http://localhost:8888/retail-app/server/ws.php", {
      method: "POST",
      body: data,
    }).then(function (response) {
      if (response.status !== 200) {
        console.log("Status Code Error:" + response.status);
        return;
      }

      response.json().then(function (data) {
        console.log(data);

        if (
          data.hasOwnProperty("Success") &&
          localStorage.getItem("loggedIn") == "true"
        ) {
          console.log("Logout Successful");
          console.log(localStorage.getItem("loggedIn"));
          localStorage.setItem("loggedIn", "false");
        } else {
          console.log("Logout Failed");
        }
      });
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleLogoutSubmit}>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Logout;
