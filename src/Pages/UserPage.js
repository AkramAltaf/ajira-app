import React from "react";
import Profile from "../components/DesktopUser/Profile";
import Order from "../components/DesktopUser/Order";
import Shipping from "../components/DesktopUser/Shipping";

const UserPage = () => {
  return (
    <>
      <Profile />
      <Order />
      <Shipping />
    </>
  );
};

export default UserPage;
