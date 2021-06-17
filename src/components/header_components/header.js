import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">LOGO</div>

        <nav>
          <ul>
            <li className="header-list">
              <Link to="/">HOME</Link>
            </li>
            <li className="header-list">
              <Link to="PostPage">POST</Link>
            </li>
            <li className="header-list">
              <Link to="MoviePage">MOVIE</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
