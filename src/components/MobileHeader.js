import React, { useState } from "react";
import { MdSearch, MdAddShoppingCart } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import "./MobileHeader.css";
import { Link } from "react-router-dom";

function MobileHeader() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div
        onClick={toggleSidebar}
        className={sidebar ? "sidebar-wrapper active" : "sidebar-wrapper"}
      >
        <div className="cancel">
          <IoMdClose onClick={toggleSidebar} />
        </div>
        <ul className="sidebar">
          <li>
            <Link to="/user" className="active">
              My profile
            </Link>
          </li>
          <li>
            <a href="#">My wishlist</a>
          </li>
          <li>
            <a href="#">My orders</a>
          </li>
          <li>
            <a href="#">My addresses</a>
          </li>
        </ul>
        <ul className="sidebar brand">
          <li>
            <a href="#" className="active">
              The brand
            </a>
          </li>
          <li>
            <a href="#">The made up story</a>
          </li>
          <li>
            <a href="#">Franchise and supplieds</a>
          </li>
          <li>
            <a href="#">Store locator</a>
          </li>
        </ul>
      </div>
      <div className="mobile-navbar" style={{ display: "none" }}>
        <div className="container flex">
          <Link to="/" className="mobile-navbar-brand">
            Made up
          </Link>
          <ul className="mobile-actions">
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
                <AiOutlineMenu onClick={toggleSidebar} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileHeader;
