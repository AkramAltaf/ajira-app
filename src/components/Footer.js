import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container flex">
        <div className="footer-wrap">
          <ul>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">Delivery information</Link>
            </li>
            <li>
              <Link to="/">Returns & Exchange</Link>
            </li>
            <li>
              <Link to="/">Technical & privacy</Link>
            </li>
            <li>
              <Link to="/">Order status</Link>
            </li>
          </ul>
        </div>
        <div className="footer-wrap text-center">
          <Link to="/" className="ajira-brand">
            Made up
          </Link>
          <p>Stay in touch with us</p>
          <ul className="social">
            <li>
              <Link to="/">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaYoutube />
              </Link>
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
