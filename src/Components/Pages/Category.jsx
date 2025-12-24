import React, { useEffect, useState } from "react";
import "../../assets/style/Category.css";
import axios from "axios";

const Category = () => {
  const [apiData, setApiData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [Category, setCategory] = useState("");

  const fetchApiData = async () => {
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();
    setApiData(data);
    setFilteredProducts(data)
  };

  const hdlCategory = (e) => {
    const selectedCategory = e.target.innerText;
    setCategory(selectedCategory);
    const products = apiData.filter(
      (elem) => elem.category === selectedCategory
    );
    setFilteredProducts(products);
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  const hdlDelete = async (id) => {
    let confirmRes = window.confirm('Item will be Deleted permanently')
    if (confirmRes) {
      await axios.delete(`http://localhost:4000/products/${id}`);
      alert('Item deleted Successfully')
    }
    else{
      alert('Item not deleted')
    }
  }

  return (
    <>
      <div className="category-header">
        <ul>
          <li onClick={hdlCategory}>men's clothing</li>
          <li onClick={hdlCategory}>jewelery</li>
          <li onClick={hdlCategory}>electronics</li>
          <li onClick={hdlCategory}>women's clothing</li>
        </ul>
      </div>
      <div className="prodinfo">
        <h2>Category : {Category}</h2>
        <h2>Available : {filteredProducts.length}</h2>
      </div>
      <div className="prod-grid">
        {filteredProducts.map((elem) => {
          let { title, id, price, description, image } = elem;
          return (
            <div className="prod-card" key={id}>
              <img src={image} alt="" />
              <h1>{title}</h1>
              <h2>Price: {price}</h2>
              <div className="desc">
                <p>{description}</p>
              </div>
              <div className="btns">
                <button>Add to Cart</button>
                <button onClick={(id)=>hdlDelete(id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Category;
