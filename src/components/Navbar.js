import React from "react";
import { MdSearch, MdAddShoppingCart, MdPermIdentity } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar" style={{ display: "none" }}>
      <div className="container flex">
        <Link to="/" className="navbar-brand">
          Made up
        </Link>
        <ul className="navbar-nav">
          <li>
            <Link to="/">For me</Link>
          </li>
          <li>
            <Link to="/">Jeans</Link>
          </li>
          <li>
            <Link to="/">Shirts</Link>
          </li>
          <li>
            <Link to="/">T-Shirts</Link>
          </li>
          <li>
            <Link to="/">Trousers</Link>
          </li>
          <li>
            <Link to="/">Joggers</Link>
          </li>
          <li>
            <Link to="/">Shorts</Link>
          </li>
        </ul>
        <ul className="actions">
          <li>
            <Link to="/">
              <MdSearch />
            </Link>
          </li>
          <li>
            <Link to="/">
              <MdAddShoppingCart />
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <MdPermIdentity />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
