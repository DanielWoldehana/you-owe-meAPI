import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import AllDebts from "./Components/AllDebts";
import NavBar from "./Components/NavBar";

let url = "https://you-owe-me-api.herokuapp.com/api/Debts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDebts: []
    };
  }

  componentDidMount() {
    console.log("DidMount");
    axios.get(url).then(res => {
      let debtsDB = res.data;
      this.setState({ allDebts: debtsDB });
    });
  }
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <AllDebts {...this.state} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
