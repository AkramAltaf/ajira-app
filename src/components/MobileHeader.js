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
            <Link to="/profile" className="active">
              My profile
            </Link>
          </li>
          <li>
            <Link to="/">My wishlist</Link>
          </li>
          <li>
            <Link to="/">My orders</Link>
          </li>
          <li>
            <Link to="/">My addresses</Link>
          </li>
        </ul>
        <ul className="sidebar brand">
          <li>
            <Link to="/" className="active">
              The brand
            </Link>
          </li>
          <li>
            <Link to="/">The made up story</Link>
          </li>
          <li>
            <Link to="/">Franchise and supplieds</Link>
          </li>
          <li>
            <Link to="/">Store locator</Link>
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
              <Link to="#">
                <MdSearch />
              </Link>
            </li>
            <li>
              <Link to="/">
                <MdAddShoppingCart />
              </Link>
            </li>
            <li>
              <Link to="#">
                <AiOutlineMenu onClick={toggleSidebar} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileHeader;
