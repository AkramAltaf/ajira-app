import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import product from "../../assets/product.png";
import "./Order.css";

const Order = () => {
  const products = [
    {
      pic: product,
      orderId: "Order#12345678",
      name: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
      delivery: "Express Delivery by Sat, Aug 30",
      mode: "Cash on delivery",
      price: 1899,
      icon: <MdKeyboardArrowRight />,
    },
    {
      pic: product,
      orderId: "Order#12345678",
      name: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
      delivery: "Express Delivery by Sat, Aug 30",
      mode: "Cash on delivery",
      price: 1899,
      icon: <MdKeyboardArrowRight />,
    },
    {
      pic: product,
      orderId: "Order#12345678",
      name: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
      delivery: "Express Delivery by Sat, Aug 30",
      mode: "Cash on delivery",
      price: 1899,
      icon: <MdKeyboardArrowRight />,
    },
    {
      pic: product,
      orderId: "Order#12345678",
      name: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
      delivery: "Express Delivery by Sat, Aug 30",
      mode: "Cash on delivery",
      price: 1899,
      icon: <MdKeyboardArrowRight />,
    },
  ];

  return (
    <div className="order">
      <p>Pending Orders</p>
      {products.map((product, index) => (
        <div className="order-wrapper" key={index}>
          <div className="order-detail">
            <div className="product-detail">
              <div className="product-image">
                <img src={product.pic} alt="Product" />
              </div>
              <div className="product-detail-wrap">
                <p className="order-id">{product.orderId}</p>
                <p className="product-name">{product.name}</p>
                <p className="delivery">{product.delivery}</p>
              </div>
            </div>
            <div className="price-detail">
              <p className="price">{product.mode}</p>
              <span>&#8377; {product.price}</span>
              <span>{product.icon}</span>
            </div>
          </div>
          <div className="delivery-status">
            {/* {status ? "Delivered" : "Pending"} */}
            Pending
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;
