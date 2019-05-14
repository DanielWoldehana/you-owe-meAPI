import React, { Component } from "react";
import "./allDebts.css";

class AllDebts extends Component {
  render() {
    console.log(this.props.allDebts);
    let showDebts = this.props.allDebts.map(debt => {
      return (
        <div className="debtCard">
          <img src={debt.picture} alt={debt.name} />
          <h1>{debt.name}</h1>
          <p className="title">Proffesion and title</p>
          <p>Owes Me: ${debt.moneyOwed}</p>
          <p>{debt.reason}</p>
          <p>{debt.interestRate}</p>
          <p>{debt.dueDate}</p>
          <button>Contact</button>
        </div>
      );
    });
    return (
      <div>
        <h1 className="debtTitle">You Better Have My Money List!!💰</h1>
        <div className="debtContainer">{showDebts} </div>
      </div>
    );
  }
}

export default AllDebts;
