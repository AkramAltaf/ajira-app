import React from "react";
import { TiLocation } from "react-icons/ti";
import "./Subscribe.css";

export default function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subscribe-content">
        <h2>Get coupons & style guides</h2>
        <p>Subscribe to our Newsletter</p>
        <form>
          <input type="email" placeholder="E-mail" />
          <input
            type="submit"
            className="btn subscribe-btn"
            value="Subscribe"
          />
        </form>
      </div>
      <button type="button" className="location">
        <TiLocation />
        Locate us
      </button>
    </div>
  );
}
