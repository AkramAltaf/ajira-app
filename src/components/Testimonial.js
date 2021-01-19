import React from "react";
import { HiStar } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial from "../assets/testimonial-img.png";
import "./Testimonial.css";
import { Link } from "react-router-dom";

function Testimonial() {
  let settings = {
    // dot: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScoll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="testimonial">
      <div className="container">
        <div className="testimonial-title">
          <h3>Testimonial</h3>
        </div>
        <Slider {...settings}>
          <div className="testimonial-wrap">
            <div className="testimonial-wrapper">
              <div className="testimonial-image">
                <img src={testimonial} alt="Testimonial" />
              </div>
              <div className="testimonial-detail">
                <p>Vikas</p>
                <Link to="/">
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar />
                </Link>
              </div>
              <p>
                <i>Love the cloth material! So breezy and </i>
                comfortable. Really durable as well. I must say the
                <i> jeans I bought was worth the price.</i>
              </p>
            </div>
          </div>
          <div className="testimonial-wrap">
            <div className="testimonial-wrapper">
              <div className="testimonial-image">
                <img src={testimonial} alt="Testimonial" />
              </div>
              <div className="testimonial-detail">
                <p>Vikas</p>
                <Link to="/">
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar />
                </Link>
              </div>
              <p>
                <i>Love the cloth material! So breezy and </i>
                comfortable. Really durable as well. I must say the
                <i> jeans I bought was worth the price.</i>
              </p>
            </div>
          </div>
          <div className="testimonial-wrap">
            <div className="testimonial-wrapper">
              <div className="testimonial-image">
                <img src={testimonial} alt="Testimonial" />
              </div>
              <div className="testimonial-detail">
                <p>Vikas</p>
                <Link to="/">
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar />
                </Link>
              </div>
              <p>
                <i>Love the cloth material! So breezy and </i>
                comfortable. Really durable as well. I must say the
                <i> jeans I bought was worth the price.</i>
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
