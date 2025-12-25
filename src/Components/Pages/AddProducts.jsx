import React, { useState } from "react";
import "../../assets/style/addProduct.css";

const AddProducts = () => {
  const [FormData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: { rate: "", count: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "rate" || name === "count") {
      setFormData({
        ...FormData,
        rating: {
          ...FormData.rating,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...FormData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormData);
  };

  return (
    <>
      <div className="addproduct">
        <h1>Add Products</h1>
        <div className="formbox">
          <form action="" method="" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter title...."
              value={FormData.title}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter price... "
              value={FormData.price}
              onChange={handleChange}
              required
            />
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="Enter description... "
              value={FormData.description}
              onChange={handleChange}
              required
            />
            <select
              name="category"
              id="category"
              value={FormData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
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
              value={FormData.image}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="rate"
              id="rate"
              placeholder="Enter rate..."
              value={FormData.rating.rate}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="count"
              id="count"
              placeholder="Enter count..."
              value={FormData.rating.count}
              onChange={handleChange}
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
