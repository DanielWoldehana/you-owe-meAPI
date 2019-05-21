import React, { Component } from "react";
import "./newdebt.css";

class EditDebt extends Component {
  constructor(props) {
    super(props);

    // filter through all props.allDebts
    // match by name
    // set initial state for this one person by name
    let onePerson = props.allDebts.filter(person => {
      return person.name === props.updateThis;
    });

    this.state = {
      ...onePerson[0]
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e.target.value);
    // console.log(e.target.name);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.myEditedState(this.state);
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
            value={this.state.reason}
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

export default EditDebt;
