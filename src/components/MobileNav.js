import React from "react";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product from "../assets/testimonial-img.png";
import "./MobileNav.css";

function MobileNav() {
  let settings = {
    // dot: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScoll: 1,
    cssEase: "linear",
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 0,
        },
      },
    ],
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
  return (
    <div className="container hide-mobile-nav" style={{ display: "none" }}>
      <Slider {...settings}>
        <div className="mobile-nav-wrapper">
          <div className="mobile-nav-detail">
            <div className="mobile-nav-image active">
              <a href="#">
                <img src={product} alt="Product" />
              </a>
            </div>
            <a href="#">For Me</a>
          </div>
        </div>
        <div className="mobile-nav-wrapper">
          <div className="mobile-nav-detail">
            <div className="mobile-nav-image">
              <a href="#">
                <img src={product} alt="Product" />
              </a>
            </div>
            <a href="#">Jeans</a>
          </div>
        </div>
        <div className="mobile-nav-wrapper">
          <div className="mobile-nav-detail">
            <div className="mobile-nav-image">
              <a href="#">
                <img src={product} alt="Product" />
              </a>
            </div>
            <a href="#">T-Shirts</a>
          </div>
        </div>
        <div className="mobile-nav-wrapper">
          <div className="mobile-nav-detail">
            <div className="mobile-nav-image">
              <a href="#">
                <img src={product} alt="Product" />
              </a>
            </div>
            <a href="#">Shirts</a>
          </div>
        </div>
        <div className="mobile-nav-wrapper">
          <div className="mobile-nav-detail">
            <div className="mobile-nav-image">
              <a href="#">
                <img src={product} alt="Product" />
              </a>
            </div>
            <a href="#">Trousers</a>
          </div>
        </div>
        <div className="mobile-nav-wrapper">
          <div className="mobile-nav-detail">
            <div className="mobile-nav-image">
              <a href="#">
                <img src={product} alt="Product" />
              </a>
            </div>
            <a href="#">Joggers</a>
          </div>
        </div>
        <div className="mobile-nav-wrapper">
          <div className="mobile-nav-detail">
            <div className="mobile-nav-image">
              <a href="#">
                <img src={product} alt="Product" />
              </a>
            </div>
            <a href="#">Shorts</a>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MobileNav;
