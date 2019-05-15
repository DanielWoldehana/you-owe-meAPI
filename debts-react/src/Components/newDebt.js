import React, { Component } from "react";
import "./newdebt.css";
class newDebt extends Component {
  render() {
    return (
      <div className="formContainer1">
        <form action="" className="formContainer2">
          Full Name
          <input type="text" placeholder="Person's name.." />
          MoneyOwed
          <input type="text" placeholder="Amount of Money.." />
          Reason for Debt
          <input type="text" placeholder="Reason.." />
          DueDate
          <input type="text" placeholder="Due date.." />
          Phone Number
          <input type="text" placeholder="Person's Number.." />
          Email
          <input type="text" placeholder="Person's email.." />
          Picture
          <input type="text" placeholder="Picture Url.." />
          Interest Rate/Month
          <input type="text" placeholder="Interest Rate.." />
          <input className="submitNewDebt" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default newDebt;
