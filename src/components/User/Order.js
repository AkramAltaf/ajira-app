import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import product from "../../assets/product.png";
import "./Order.css";

const Order = () => {
  const [status, setStatus] = useState(false);

  return (
    <div className="order">
      <p>Pending Orders</p>
      <div className="order-wrapper">
        <div className="order-detail">
          <div className="product-detail">
            <div className="product-image">
              <img src={product} alt="Product-image" />
            </div>
            <div className="product-detail-wrap">
              <p className="order-id">Order#12345678</p>
              <p className="product-name">
                Madeup White Cotton Blend Checkered Slim Fit Shirt
              </p>
              <p className="delivery">Express Delivery by Sat, Aug 30</p>
            </div>
          </div>
          <div className="price-detail">
            <p className="price">Cash on delivery</p>
            <span>&#8377; 1899</span>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className={`delivery-status ${status ? "delivered" : ""}`}>
          {status ? "Delivered" : "Pending"}
        </div>
      </div>
      <div className="order-wrapper">
        <div className="order-detail">
          <div className="product-detail">
            <div className="product-image">
              <img src={product} alt="Product-image" />
            </div>
            <div className="product-detail-wrap">
              <p className="order-id">Order#12345678</p>
              <p className="product-name">
                Madeup White Cotton Blend Checkered Slim Fit Shirt
              </p>
              <p className="delivery">Express Delivery by Sat, Aug 30</p>
            </div>
          </div>
          <div className="price-detail">
            <p className="price">Cash on delivery</p>
            <span>&#8377; 1899</span>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className={`delivery-status ${status ? "delivered" : ""}`}>
          {status ? "Delivered" : "Pending"}
        </div>
      </div>
      <div className="order-wrapper">
        <div className="order-detail">
          <div className="product-detail">
            <div className="product-image">
              <img src={product} alt="Product-image" />
            </div>
            <div className="product-detail-wrap">
              <p className="order-id">Order#12345678</p>
              <p className="product-name">
                Madeup White Cotton Blend Checkered Slim Fit Shirt
              </p>
              <p className="delivery">Express Delivery by Sat, Aug 30</p>
            </div>
          </div>
          <div className="price-detail">
            <p className="price">Cash on delivery</p>
            <span>&#8377; 1899</span>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className={`delivery-status ${status ? "delivered" : ""}`}>
          {status ? "Delivered" : "Pending"}
        </div>
      </div>
      <div className="order-wrapper">
        <div className="order-detail">
          <div className="product-detail">
            <div className="product-image">
              <img src={product} alt="Product-image" />
            </div>
            <div className="product-detail-wrap">
              <p className="order-id">Order#12345678</p>
              <p className="product-name">
                Madeup White Cotton Blend Checkered Slim Fit Shirt
              </p>
              <p className="delivery">Express Delivery by Sat, Aug 30</p>
            </div>
          </div>
          <div className="price-detail">
            <p className="price">Cash on delivery</p>
            <span>&#8377; 1899</span>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className={`delivery-status ${status ? "delivered" : ""}`}>
          {status ? "Delivered" : "Pending"}
        </div>
      </div>
    </div>
  );
};

export default Order;
