import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
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
  );
}

export default Sidebar;
