import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/style/CartItem.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const CartItems = () => {
  const [CartData, setCartData] = useState([]);
  const [TotalValue, setTotalValue] = useState(null)

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/cart-items");
    const data = await response.data;
    const DatawithQuantity = data.map((item) => ({ ...item, quantity: 1 }));
    setCartData(DatawithQuantity);
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

  const hdlQtyIncrease = (id) => {
    const updated = CartData.map((item) => ({ ...item }));

    updated.forEach((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
    });

    setCartData(updated);
  };

  const hdlQtyDecrease = (id) => {
    const updated = CartData.map((item) => ({ ...item })); 

    updated.forEach((item) => {
      if (item.id === id && item.quantity > 1) {
        item.quantity -= 1;
      }
    });

    setCartData(updated);
  };

  useEffect(() => {
    let total = 0;
    CartData.forEach((elem) => {
      total += elem.price * elem.quantity;
    });
    setTotalValue(total);
  }, [CartData]);

  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <span>Your Cart Items</span>
          <span>Total Amount : {TotalValue}</span>
        </div>
        <div className="cart-grid">
          {CartData.map((elem) => {
            let { id, title, price, category, image, rating, quantity } = elem;
            return (
              <div className="cart-item" key={elem.id}>
                <img src={image} alt={title} />
                <div className="item-details">
                  <h3>{title}</h3>
                  <p className="item-category">Category: {category}</p>
                  <div className="quantity">
                    Quantity:
                    <span>
                      <IndeterminateCheckBoxIcon
                        onClick={() => hdlQtyDecrease(id)}
                      />
                    </span>
                    {quantity}
                    <span>
                      <AddBoxIcon onClick={() => hdlQtyIncrease(id)} />
                    </span>
                  </div>
                  <p className="item-price">Price: ${price * quantity}</p>
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
