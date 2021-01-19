import React, { useState } from "react";
import userPic from "../../assets/profile.png";
import "./Profiles.css";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import Profile from "../User/Profile";
import Order from "../User/Order";
import Address from "../User/Address";

const Profiles = () => {
  const [navItems, setNavItems] = useState([
    {
      id: "abc",
      title: "My profile",
      subtitle: "Notifications, password",
      type: "profile",
      active: true,
      comp: <Profile />,
    },
    {
      id: "xyz",
      title: "My Orders",
      subtitle: "Already have 12 orders",
      type: "order",
      active: false,
      comp: <Order />,
    },
    {
      id: "pqr",
      title: "Shipping address",
      subtitle: "3 address",
      type: "address",
      active: false,
      comp: <Address />,
    },
  ]);

  const toggleAccordion = (id) => {
    let updatedNavItems = navItems;
    updatedNavItems = updatedNavItems.map((navItem) => {
      if (navItem.id === id) {
        return { ...navItem, active: true };
      }
      return { ...navItem, active: false };
    });

    setNavItems(updatedNavItems);
  };

  return (
    <div className="user">
      <div className="container">
        <div className="user-wrap">
          <div className="user-label">
            <div className="user-pic">
              <img src={userPic} alt="user" />
              <div className="user-detail">
                <p className="name">Grishk</p>
                <p className="mail">griiskaim@gmail.com</p>
              </div>
            </div>
            {navItems.map((navItem) => (
              <div
                key={navItem.id}
                className={`title-label desktop-layout ${
                  navItem.active ? "active" : ""
                }`}
                onClick={() => toggleAccordion(navItem.id)}
              >
                <div>
                  <p className="title-text">{navItem.title}</p>
                  <p className="subtitle-text">{navItem.subtitle}</p>
                </div>
                <MdKeyboardArrowRight />
                <span className="desktop-separator" />
              </div>
            ))}
          </div>
          <div className="user-content">
            {navItems.map((navItem, index) => (
              <div key={index}>
                <div
                  key={navItem.id}
                  className={`title-label mobile-layout ${
                    navItem.active ? "active" : ""
                  }`}
                  onClick={() => toggleAccordion(navItem.id)}
                >
                  <div>
                    <p className="title-text">{navItem.title}</p>
                    <p className="subtitle-text">{navItem.subtitle}</p>
                  </div>
                  <span className="mobile-arrow">
                    {navItem.active ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </span>
                  <span className="desktop-separator" />
                </div>
                <div
                  className={`label-content ${navItem.active ? "active" : ""}`}
                  key={index}
                >
                  {navItem.comp}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
