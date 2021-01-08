import React from "react";
import { MdSearch, MdAddShoppingCart, MdPermIdentity } from "react-icons/md";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar" style={{ display: "none" }}>
      <div className="container flex">
        <a href="#" className="navbar-brand">
          Made up
        </a>
        <ul className="navbar-nav">
          <li>
            <a href="#">For me</a>
          </li>
          <li>
            <a href="#">Jeans</a>
          </li>
          <li>
            <a href="#">Shirts</a>
          </li>
          <li>
            <a href="#">T-Shirts</a>
          </li>
          <li>
            <a href="#">Trousers</a>
          </li>
          <li>
            <a href="#">Joggers</a>
          </li>
          <li>
            <a href="#">Shorts</a>
          </li>
        </ul>
        <ul className="actions">
          <li>
            <a href="#">
              <MdSearch />
            </a>
          </li>
          <li>
            <a href="#">
              <MdAddShoppingCart />
            </a>
          </li>
          <li>
            <a href="#">
              <MdPermIdentity />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
