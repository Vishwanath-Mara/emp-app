import React, { Component } from "react";
import "./Home.css";
import EMPDashboard from "./EMPDashboard";
import { withRouter } from "react-router-dom";
import { Grid, Button } from "react-bootstrap";

import { connect } from "react-redux";
import { empAction } from "./Store/action.js";

var data = {
  user: [{
    "id": 1,
    "name": "test1",
    "age": "11",
    "gender": "male",
    "email": "test1@gmail.com",
    "phoneNo": "9415346313"
  },
  {
    "id": 2,
    "name": "test2",
    "age": "12",
    "gender": "male",
    "email": "test2@gmail.com",
    "phoneNo": "9415346314"
  },
  {
    "id": 3,
    "name": "test3",
    "age": "13",
    "gender": "male",
    "email": "test3@gmail.com",
    "phoneNo": "9415346315"
  },
  {
    "id": 4,
    "name": "test4",
    "age": "14",
    "gender": "male",
    "email": "test4@gmail.com",
    "phoneNo": "9415346316"
  },
  {
    "id": 5,
    "name": "test5",
    "age": "15",
    "gender": "male",
    "email": "test5@gmail.com",
    "phoneNo": "9415346317"
  },
  {
    "id": 6,
    "name": "test6",
    "age": "16",
    "gender": "male",
    "email": "test6@gmail.com",
    "phoneNo": "9415346318"
  }
  ]
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loggedIn: false,
      wrongCredentials: false
    };
  }

  usernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  passwordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    if (username === "hruday@gmail.com" && password === "hruday123") {
      console.log("true")
      this.setState({ loggedIn: true })
      this.props.storeEMPDetails(data.user);
    } else {
      this.setState({ wrongCredentials: true })
      console.log("false")
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <EMPDashboard />
    }
    return (
      <React.Fragment>
        <Grid fluid>

          <div className="loginCard">
            <div>
              <div className="loginTitle">Login</div>
              to get the Employee details
              </div>
            <form onSubmit={this.handleSubmit}>
              <fieldset className="fieldset">
                <legend className="legend">Username</legend>
                <input
                  className="input-box"
                  required="required"
                  onChange={this.usernameChange}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="legend">Password</legend>
                <input
                  className="input-box"
                  type="password"
                  name="password"
                  required="required"
                  onChange={this.passwordChange}
                />
              </fieldset>
              {this.state.wrongCredentials ? (
                <p className="authMsg">Incorrect Username or password</p>
              ) : null}

              <Button className="loginButton" type="submit" block>
                LOGIN
            </Button>
            </form>
          </div>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    storeEMPDetails: Vo => dispatch(empAction(Vo))
  };
};

export default connect(null, mapDispatchToProps)
  (withRouter(Home));