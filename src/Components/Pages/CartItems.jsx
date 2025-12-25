import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/style/CartItem.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const CartItems = () => {
  const [CartData, setCartData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/cart-items");
    const data = await response.data;
    setCartData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const hdlRemove = async (id) => {
    let confirmRes = window.confirm("Item will be removed from cart");
    if (confirmRes) {
      await axios.delete(`http://localhost:4000/cart-items/${id}`);
      alert("Item removed Successfully");
      fetchData();
    } else {
      alert("Item not removed");
    }
  };
  return (
    <>
      <div className="cart-container">
        <div className="cart-grid">
          {CartData.map((elem) => {
            let { id, title, price, category, image, rating } = elem;
            return (
              <div className="cart-item" key={elem.id}>
                <img src={image} alt={title} />
                <div className="item-details">
                  <h3>{title}</h3>
                  <p className="item-category">Category: {category}</p>
                  <div className="quantity">
                    Quantity:
                    <span>
                      <IndeterminateCheckBoxIcon />
                    </span>
                    {1}
                    <span>
                      <AddBoxIcon />
                    </span>
                  </div>
                  <p className="item-price">Price: ${price}</p>
                  <p>Rating: {rating.rate} ⭐</p>
                  <div className="item-actions">
                    <button
                      className="remove-button"
                      onClick={() => hdlRemove(id)}
                    >
                      Remove
                    </button>
                    <button className="checkout-button">Checkout</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CartItems;
