import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navShow: false
    };
  }

  toggleNavBar = e => {
    e.preventDefault();
    this.setState({
      navShow: !this.state.navShow
    });
  };
  render() {
    return (
      <nav>
        <Link to="/">
          <div className="myLogo">Betta-Ha-Ma-Money</div>
        </Link>
        <input className="myInput" type="text" placeholder="enter name..." />
        <input className="mySubmit" type="submit" value="find" />

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
