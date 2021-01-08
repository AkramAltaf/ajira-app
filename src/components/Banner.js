import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <span className="gallery-content">
          Clothes that <span>respire</span>
        </span>
        <span className="gallery-content">
          for men who <span>aspire</span>
        </span>
        <a href="#" className="btn btn-banner mt-60">
          Browser collections
        </a>
      </div>
    </div>
  );
}
