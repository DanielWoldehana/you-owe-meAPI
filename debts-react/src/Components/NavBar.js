import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      navShow: false
    };
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.search(this.state.name);
  };
  toggleNavBar = e => {
    e.preventDefault();
    this.setState({
      navShow: !this.state.navShow
    });
  };
  render() {
    // console.log(this.props.showAllDebts);
    return (
      <nav>
        <Link to="/">
          <div onClick={this.props.showAllDebts} className="myLogo">
            Betta-Ha-Ma-Money
          </div>
        </Link>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            className="myInput"
            type="text"
            placeholder="enter name..."
            name="name"
          />
          <input className="mySubmit" type="submit" value="find" />
        </form>
        <ul className={`myUl ${this.state.navShow ? "showNav" : ""}`}>
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/create">
            <li>New Debt</li>
          </Link>
          <li />
        </ul>
        <div className="toggleNav" onClick={e => this.toggleNavBar(e)}>
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
      </nav>
    );
  }
}

export default NavBar;
