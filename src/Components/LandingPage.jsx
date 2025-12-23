import { Link } from "react-router-dom";
import "../assets/style/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="main">
        <h1>Welcome to StoreShop</h1>
        <p>Discover amazing products at unbeatable prices</p>

        <div className="buttons">
          <Link to="/products" className="btn primary">
            Products
          </Link>
          <Link to="/about-us" className="btn secondary">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="features">
        <h2>Why Choose Us</h2>

        <div className="feature-grid">
          <div className="feature-box">
            <h3>Fast Delivery</h3>
            <p>Quick and safe delivery to your home</p>
          </div>

          <div className="feature-box">
            <h3>Secure Payment</h3>
            <p>Your payments are safe with us</p>
          </div>

          <div className="feature-box">
            <h3>Best Quality</h3>
            <p>We provide high quality products</p>
          </div>

          <div className="feature-box">
            <h3>24/7 Support</h3>
            <p>We are always here to help you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
