import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";
import "./App.css";
import AllDebts from "./Components/AllDebts";
import NavBar from "./Components/NavBar";
import NewDebt from "./Components/newDebt";
import EditDebt from "./Components/EditDebt";

let url = "http://localhost:3001/api/Debts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDebts: [],
      redirect: false
    };
  }

  componentDidMount() {
    console.log("DidMount");
    axios.get(url).then(res => {
      let debtsDB = res.data;
      this.setState({ allDebts: debtsDB });
    });
  }

  setRedirectHandler = () => {
    this.setState({
      redirect: true
    });
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  newDebtHandler = newDebt => {
    console.log(newDebt);
    axios
      .post("http://localhost:3001/api/Debts/newDebt", newDebt)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  editDebtHandler = updatedDebt => {
    console.log(updatedDebt);
    console.log("props passed");
    // axios
    //   .put(`http://localhost:3001/api/Debts/newDebt/update/${updatedDebt.name}`)
    //   .then(res => {
    //     console.log(res);
    //     const updated = res.data;
    //     this.setState({ allDebts: updated });
    //     return <Redirect to="/" />;
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  };

  deleteDebtHandler = id => {
    id.preventDefault();
    axios.delete(`http://localhost:3001/api/Debts/delete/${id}`).then(res => {
      const remainDebts = res.data;
      this.setState({ allDebts: remainDebts });
      return <Redirect to="/" />;
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <AllDebts
                {...this.state}
                delete={this.deleteDebtHandler}
                editDebt={this.editDebtHandler}
              />
            )}
          />
          <Route
            exact
            path="/create"
            render={props => (
              <NewDebt
                {...this.state}
                addDebt={this.newDebtHandler}
                setRedirect={this.setRedirectHandler}
              />
            )}
          />
          <Route
            exact
            path="/update"
            render={props => (
              <EditDebt {...this.state} editDebt={this.editDebtHandler} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
