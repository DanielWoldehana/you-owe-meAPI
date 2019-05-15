import React, { Component } from "react";
import "./allDebts.css";

class AllDebts extends Component {
  render() {
    console.log(this.props.allDebts);
    let showDebts = this.props.allDebts.map((debt, index) => {
      return (
        <div className="debtCard">
          <img src={debt.picture} alt={debt.name} />
          <hr />
          <h1>{debt.name}</h1>
          <p>Owes Me: ${debt.moneyOwed}</p>
          <p>Reason for debt: {debt.reason}</p>
          <p>Interest Rate: {debt.interestRate}</p>
          <p>Due Date: {debt.dueDate}</p>
          <p>Phone Number: {debt.phoneNumber}</p>
          <p>Email: {debt.email}</p>
          <button onClick={() => this.props.delete}>Paid Off</button>
        </div>
      );
    });
    return (
      <div>
        <div className="debtContainer">{showDebts} </div>
      </div>
    );
  }
}

export default AllDebts;
