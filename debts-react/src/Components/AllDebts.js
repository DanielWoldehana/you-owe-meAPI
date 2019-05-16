import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./allDebts.css";

class AllDebts extends Component {
  render() {
    console.log(this.props.allDebts);
    let showDebts = this.props.allDebts.map((debt, index) => {
      const id = debt._id;
      // const debtInfo = debt;
      return (
        <div className="debtCard">
          <img src={debt.picture} alt={debt.name} />
          <Link to="/update">
            <img
              onClick={() => this.props.editDebt(debt.name)}
              className="editIcon"
              src="https://image.flaticon.com/icons/svg/1160/1160758.svg"
              alt="edit"
            />
          </Link>
          <hr />
          <h1>{debt.name}</h1>

          <p>
            <span className="cardProperties">Owes Me</span>: $
            <span className="debtOwed">{debt.moneyOwed}</span>
          </p>
          <p>
            <span className="cardProperties">Reason for debt</span>:{" "}
            {debt.reason}
          </p>
          <p>
            <span className="cardProperties">Interest Rate</span>:{" "}
            {debt.interestRate}
          </p>
          <p>
            <span className="cardProperties">Due Date</span>: {debt.dueDate}
          </p>
          <p>
            <span className="cardProperties">Phone Number</span>:{" "}
            {debt.phoneNumber}
          </p>
          <p>
            <span className="cardProperties">Email</span>: {debt.email}
          </p>

          <button onClick={() => this.props.delete(id)}>Delete</button>
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
