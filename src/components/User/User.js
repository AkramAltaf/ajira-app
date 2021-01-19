import React, { useState } from "react";
import userPic from "../../assets/profile.png";
import "./User.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Profile from "./Profile";
import Order from "./Order";
import Address from "./Address";

const User = () => {
  const [profile, setProfile] = useState(true);
  const [order, setOrder] = useState(false);
  const [address, setAddress] = useState(false);

  const toggleProfile = () => {
    setProfile(!profile);
  };

  const toggleOrder = () => {
    setOrder(!order);
  };

  const toggleAddress = () => {
    setAddress(!address);
  };

  return (
    <div className="user">
      <div className="container">
        <div className="user-pic">
          <img src={userPic} alt="user" />
          <div className="user-detail">
            <p className="name">Grishk</p>
            <p className="mail">griiskaim@gmail.com</p>
          </div>
        </div>
        <div className="title-label" onClick={toggleProfile}>
          <div>
            <p className="title-text">My profile</p>
            <p className="subtitle-text">Notifications, password</p>
          </div>
          <span>
            {profile ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
        </div>
        <div className="title-content">{profile ? <Profile /> : null}</div>
        <div className="title-label" onClick={toggleOrder}>
          <div>
            <p className="title-text">My Orders</p>
            <p className="subtitle-text">Already have 12 orders</p>
          </div>
          <span>{order ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
        </div>
        <div className="title-content">{order ? <Order /> : null}</div>
        <div className="title-label" onClick={toggleAddress}>
          <div>
            <p className="title-text">Shipping addresses</p>
            <p className="subtitle-text">3 addresses</p>
          </div>
          <span>
            {address ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
        </div>
        <div className="title-content">{address ? <Address /> : null}</div>
      </div>
    </div>
  );
};

export default User;
