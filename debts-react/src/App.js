import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import AllDebts from "./Components/AllDebts";

let url = "https://you-owe-me-api.herokuapp.com/api/Debts";

class App extends Component {
  constructor() {
    super();
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
        <nav className="myNav">
          <h1 className="navH">You Owe Me</h1>
          <Link to="/">
            <h1 className="navH1">Home</h1>
          </Link>
          <Link to="/createDebt">
            <h1 className="navH1">Add Debts</h1>
          </Link>
          <Link to="/search">
            <h1 className="navH1 navS">Search</h1>
          </Link>
        </nav>
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
