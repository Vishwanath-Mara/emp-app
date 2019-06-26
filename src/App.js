import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import EMPDashboard from "./EMPDashboard";
import { HashRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
            <HashRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/EMPDashboard" component={EMPDashboard} />
              </Switch>
            </HashRouter>
      </div>
    );
  }
}

export default App;
