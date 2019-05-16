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
              // onClick={() => this.props.editDebt(debtInfo)}
              className="editIcon"
              src="https://image.flaticon.com/icons/svg/1160/1160758.svg"
              alt="edit"
            />
          </Link>
          <hr />
          <h1>{debt.name}</h1>

          <p>
            Owes Me: $<span className="debtOwed">{debt.moneyOwed}</span>
          </p>
          <p>Reason for debt: {debt.reason}</p>
          <p>Interest Rate: {debt.interestRate}</p>
          <p>Due Date: {debt.dueDate}</p>
          <p>Phone Number: {debt.phoneNumber}</p>
          <p>Email: {debt.email}</p>

          <button onClick={() => this.props.delete(id)}>Paid Off</button>
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
