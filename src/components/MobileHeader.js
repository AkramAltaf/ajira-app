import React, { useState } from "react";
import { MdSearch, MdAddShoppingCart } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import "./MobileHeader.css";

function MobileHeader() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={sidebar ? "sidebar-wrapper active" : "sidebar-wrapper"}>
        <div className="cancel">
          <IoMdClose onClick={toggleSidebar} />
        </div>
        <ul className="sidebar">
          <li>
            <a href="#" className="active">
              My profile
            </a>
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
              My profile
            </a>
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
      </div>
      <div className="mobile-navbar" style={{ display: "none" }}>
        <div className="container flex">
          <a href="#" className="mobile-navbar-brand">
            Made up
          </a>
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
