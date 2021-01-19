import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <div className={sidebar ? "sidebar-wrapper active" : "sidebar-wrapper"}>
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
  );
}

export default Sidebar;
