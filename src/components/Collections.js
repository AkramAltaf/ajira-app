import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Collections.css";
import CollectionData from "./CollectionData";

function Collections() {
  let settings = {
    // dot: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScoll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },

      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container collection">
      <div className="title">
        <h3>Latest collections</h3>
      </div>
      <Slider {...settings}>
        {CollectionData.map((val, index) => {
          return (
            <div className="collection-wrapper" key={index}>
              <a href="#">
                <div className="collection-image">
                  <img src={val.imgSrc} alt="collection" />
                </div>
                <div className="collection-details">
                  <a href="#">{val.title}</a>
                  <p className="price">{val.price}</p>
                </div>
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Collections;
