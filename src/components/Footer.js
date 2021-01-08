import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container flex">
        <div className="footer-wrap">
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Delivery information</a>
            </li>
            <li>
              <a href="#">Returns & Exchange</a>
            </li>
            <li>
              <a href="#">Technical & privacy</a>
            </li>
            <li>
              <a href="#">Order status</a>
            </li>
          </ul>
        </div>
        <div className="footer-wrap text-center">
          <a href="#" className="ajira-brand">
            Made up
          </a>
          <p>Stay in touch with us</p>
          <ul className="social">
            <li>
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-wrap">
          <h5>Our Corporate Office</h5>
          <p>
            No: 7,A2B road, Adayar Rajpuram,
            <br />
            T-Nagar, Chennai - 642002
          </p>
          <div className="contact">
            <div className="contact-detail">
              <BiEnvelope />
              <p>sales@madeup.com</p>
            </div>
            <div className="contact-detail">
              <FiPhone />
              <p>044 9999 9999</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
