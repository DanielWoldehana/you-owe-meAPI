import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";
import "./App.css";
import AllDebts from "./Components/AllDebts";
import NavBar from "./Components/NavBar";
import NewDebt from "./Components/newDebt";
import EditDebt from "./Components/EditDebt";

let url = "https://you-owe-me-api.herokuapp.com/api/Debts";
const editToThis = "";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDebts: [],
      redirect: false,
      updateThis: ""
    };
  }

  componentDidMount() {
    console.log("DidMount");
    console.log(this.props);
    axios.get(url).then(res => {
      let debtsDB = res.data;
      this.setState({ allDebts: debtsDB });
    });
  }

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
      })
      .catch(err => {
        console.error(err);
      });
  };
  myEditedState = editedState => {
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
        // return <Redirect to="/" />;
      })
      .catch(err => {
        console.error(err);
      });
  };

  editDebtHandler = updateThisName => {
    // console.log("editDebt handler");
    console.log(updateThisName);
    this.setState({ updateThis: updateThisName });
  };

  deleteDebtHandler = id => {
    axios
      .delete(`https://you-owe-me-api.herokuapp.com/api/Debts/delete/${id}`)
      .then(res => {
        console.log(res.data);
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
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <AllDebts
                {...props}
                allDebts={this.state.allDebts}
                editDebt={this.editDebtHandler}
                delete={this.deleteDebtHandler}
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
                editDebt={this.editDebtHandler}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
