import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import AllDebts from "./Components/AllDebts";
import NavBar from "./Components/NavBar";
import NewDebt from "./Components/newDebt";

let url = "https://you-owe-me-api.herokuapp.com/api/Debts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDebts: []
    };
  }

  deleteDebtHandler = debtIndex => {
    const debts = this.state.allDebts.slice();
    debts.splice(debtIndex, 1);
    this.setState({ allDebts: debts });
  };

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
            render={props => (
              <AllDebts {...this.state} delete={this.deleteDebtHandler} />
            )}
          />
          <Route exact path="/create" render={props => <NewDebt />} />
        </Switch>
      </div>
    );
  }
}

export default App;
