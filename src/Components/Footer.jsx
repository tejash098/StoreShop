import React from 'react'
import "../assets/style/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p>© {new Date().getFullYear()} StoreShop. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer