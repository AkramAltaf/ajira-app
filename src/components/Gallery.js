import React from "react";
import gallery1 from "../assets/grid-1.png";
import gallery2 from "../assets/grid-2.png";
import gallery3 from "../assets/grid-3.png";
import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery grid">
      <div className="gallery-wrap">
        <img src={gallery1} alt="Gallery" />
        <div className="gallery-content-wrap">
          <span className="gallery-content">
            <span>Summer</span> is here and
          </span>
          <span className="gallery-content">
            so is our <span>collection</span>
          </span>
        </div>
      </div>
      <div className="gallery-wrap">
        <img src={gallery2} alt="Gallery" />
        <div className="gallery-content-wrap">
          <span className="gallery-content">
            <span>Wrinkle-free</span> t-shirts
          </span>
        </div>
      </div>
      <div className="gallery-wrap">
        <img src={gallery3} alt="Gallery" />
        <div className="gallery-content-wrap">
          <span className="gallery-content">
            <span>Stain-free</span> denim shirts
          </span>
        </div>
      </div>
    </div>
  );
}
