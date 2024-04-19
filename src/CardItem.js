import React, { useState } from "react";
import add from "./images/add.png";
import del from "./images/delete.png";
import minus from "./images/minus.png";

const CardItem = () => {
  const  [data, setData]  = useState({
    price: 999,
    title: "Mobile Phone",
    qty: 1,
    img: "",
  });

  const { price, title, qty } = data;

  const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: "#ccc",
    },
  };

  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>{price}</div>
        <div style={{ color: "#777" }}>{qty}</div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src={add}
          />
          <img
            alt="decrease"
            className="action-icons"
            src={minus}
          />
          <img
            alt="delete"
            className="action-icons"
            src={del}
          />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
