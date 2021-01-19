import React from "react";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product from "../assets/testimonial-img.png";
import "./MobileNav.css";
import { Link } from "react-router-dom";

function MobileNav() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IoIosArrowForward
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IoIosArrowBack
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  let settings = {
    // dot: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScoll: 1,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 0,
        },
      },
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
              <Link to="/">
                <img src={product} alt="Product" />
              </Link>
            </div>
            <Link to="/">For Me</Link>
          </div>
        </div>
        <div className="mobile-nav-wrapper">
          <div className="mobile-nav-detail">
            <div className="mobile-nav-image">
              <Link to="/">
                <img src={product} alt="Product" />
              </Link>
            </div>
            <Link to="/">Jeans</Link>
          </div>
        </div>
        <div className="mobile-nav-wrapper">
          <div className="mobile-nav-detail">
            <div className="mobile-nav-image">
              <Link to="/">
                <img src={product} alt="Product" />
              </Link>
            </div>
            <Link to="/">T-Shirts</Link>
          </div>
        </div>
        <div className="mobile-nav-wrapper">
          <div className="mobile-nav-detail">
            <div className="mobile-nav-image">
              <Link to="/">
                <img src={product} alt="Product" />
              </Link>
            </div>
            <Link to="/">Shirts</Link>
          </div>
        </div>
        <div className="mobile-nav-wrapper">
          <div className="mobile-nav-detail">
            <div className="mobile-nav-image">
              <Link to="/">
                <img src={product} alt="Product" />
              </Link>
            </div>
            <Link to="/">Trousers</Link>
          </div>
        </div>
        <div className="mobile-nav-wrapper">
          <div className="mobile-nav-detail">
            <div className="mobile-nav-image">
              <Link to="/">
                <img src={product} alt="Product" />
              </Link>
            </div>
            <Link to="/">Joggers</Link>
          </div>
        </div>
        <div className="mobile-nav-wrapper">
          <div className="mobile-nav-detail">
            <div className="mobile-nav-image">
              <Link to="/">
                <img src={product} alt="Product" />
              </Link>
            </div>
            <Link to="/">Shorts</Link>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MobileNav;
