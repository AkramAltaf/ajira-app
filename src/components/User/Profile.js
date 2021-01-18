import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <form className="form-wrapper">
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone number" />
      <input type="text" placeholder="Password" />
      <input type="text" placeholder="Confirm Password" />
      <input type="submit" className="profile-btn" value="SAVE CHANGES" />
    </form>
  );
};

export default Profile;
