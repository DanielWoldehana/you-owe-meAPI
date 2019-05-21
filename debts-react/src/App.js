import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import fire from "./config/fire";
import axios from "axios";
import "./App.css";
import Login from "./components/Login";
import AllDebts from "./Components/AllDebts";
import NavBar from "./Components/NavBar";
import NewDebt from "./Components/newDebt";
import EditDebt from "./Components/EditDebt";

let url = "https://you-owe-me-api.herokuapp.com/api/Debts";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDebts: [],
      redirect: false,
      updateThis: "",
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
    console.log("DidMount");
    console.log(this.props);
    console.log(this.state.allDebts);
    axios.get(url).then(res => {
      let debtsDB = res.data;
      this.setState({ allDebts: debtsDB });
    });
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  showAllDebts = () => {
    axios.get(url).then(res => {
      let debtsDB = res.data;
      this.setState({ allDebts: debtsDB });
    });
  };

  handleSearch = name => {
    if (name) {
      axios
        .get(`https://you-owe-me-api.herokuapp.com/api/Debts/name/${name}`)
        .then(res => {
          console.log(res.data[0]);
          this.setState({ allDebts: res.data });
        });
    } else {
      axios.get(url).then(res => {
        let debtsDB = res.data;
        this.setState({ allDebts: debtsDB });
      });
    }
  };
  newDebtHandler = newDebt => {
    console.log(newDebt);

    axios
      .post("https://you-owe-me-api.herokuapp.com/api/Debts/newDebt", newDebt)
      .then(res => {
        console.log(res);
        window.location.href = "/";
      })
      .catch(err => {
        console.error(err);
      });
  };
  myEditedState = editedState => {
    console.log("edit this state");
    console.log(this.state.updateThis);
    console.log(editedState);
    axios
      .put(
        `https://you-owe-me-api.herokuapp.com/api/Debts/update/${
          this.state.updateThis
        }`,
        editedState
      )
      .then(res => {
        console.log(res);
        const updated = res.data;
        this.setState({ allDebts: updated });
        this.props.history.push("/");
      })
      .catch(err => {
        console.error(err);
      });
  };

  editDebtHandler = updateThisName => {
    console.log("edit this name");
    console.log(updateThisName);
    this.setState({ updateThis: updateThisName });
  };

  deleteDebtHandler = id => {
    axios
      .delete(`https://you-owe-me-api.herokuapp.com/api/Debts/delete/${id}`)
      .then(res => {
        console.log(res.data);
        console.log(this.state.history);
        window.location.href = "/";
      });
  };
  render() {
    return (
      <div>
        <Route
          path="/"
          render={props => (
            <NavBar
              alldebts={this.state.allDebts}
              search={this.handleSearch}
              showAllDebts={this.showAllDebts}
            />
          )}
        />
        <div>
          {this.state.user ? (
            <Switch>
              <Route
                exact
                path="/allDebts"
                render={props => (
                  <AllDebts
                    {...props}
                    allDebts={this.state.allDebts}
                    editDebt={this.editDebtHandler}
                    delete={this.deleteDebtHandler}
                    showAll={this.showAllDebts}
                  />
                )}
              />
              <Route
                exact
                path="/create"
                render={props => (
                  <NewDebt
                    {...props}
                    {...this.state}
                    addDebt={this.newDebtHandler}
                    showAll={this.showAllDebts}
                  />
                )}
              />
              <Route
                exact
                path="/update"
                render={props => (
                  <EditDebt
                    myEditedState={this.myEditedState}
                    {...this.state}
                  />
                )}
              />
            </Switch>
          ) : (
            <Login />
          )}
        </div>
      </div>
    );
  }
}

export default App;
