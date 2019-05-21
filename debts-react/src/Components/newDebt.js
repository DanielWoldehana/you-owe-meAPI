import React, { Component } from "react";
import "./newdebt.css";
// import axios from "axios";

// const newDebtObject = [];

class newDebt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      moneyOwed: "",
      reason: "",
      dueDate: "",
      picture: "",
      phoneNumber: "",
      email: "",
      interestRate: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state.name);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    this.props.addDebt(this.state);
  };

  render() {
    return (
      <div className="formContainer1">
        <form action="" className="formContainer2" onSubmit={this.handleSubmit}>
          Full Name
          <input
            type="text"
            placeholder="Person's name.."
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          MoneyOwed
          <input
            type="text"
            placeholder="Amount of Money.."
            name="moneyOwed"
            value={this.state.moneyOwed}
            onChange={this.handleChange}
          />
          Reason for Debt
          <input
            type="text"
            placeholder="Reason.."
            name="reason"
            value={this.state.value}
            onChange={this.handleChange}
          />
          DueDate
          <input
            type="text"
            placeholder="Due date.."
            name="dueDate"
            value={this.state.dueDate}
            onChange={this.handleChange}
          />
          Phone Number
          <input
            type="text"
            placeholder="Person's Number.."
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
          Email
          <input
            type="text"
            placeholder="Person's email.."
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          Picture
          <input
            type="text"
            placeholder="Picture Url.."
            name="picture"
            value={this.state.picture}
            onChange={this.handleChange}
          />
          Interest Rate/Month
          <input
            type="text"
            placeholder="Interest Rate.."
            name="interestRate"
            value={this.state.interestRate}
            onChange={this.handleChange}
          />
          <input className="submitNewDebt" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default newDebt;
