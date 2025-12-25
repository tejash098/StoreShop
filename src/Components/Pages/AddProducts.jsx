import React from "react";
import "../../assets/style/addProduct.css";

const AddProducts = () => {
  return (
    <>
      <div className="addproduct">
        <h1>Add Products</h1>
        <div className="formbox">
          <form action="" method="">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter title...."
              required
            />
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter price... "
              required
            />
            <select name="category" id="category" required>
              <option value="" selected disabled>
                Select Category
              </option>
              <option value="men's clothing">men's clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">electronics</option>
              <option value="women's clothing">women's clothing</option>
            </select>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="Enter image url... "
              required
            />
            <input
              type="text"
              name="rate"
              id="rate"
              placeholder="Enter rate..."
              required
            />
            <input
              type="text"
              name="count"
              id="count"
              placeholder="Enter count..."
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
