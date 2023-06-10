import React from "react";
import "../HomePage/HomePage.css";
import "../ErrorPage/ErrorPage.css";
import logo from "../../assets/logo.png";
import footerLogoImg from "../../assets/footer-logo.png";
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <div className="container d-flex justify-content-space-between align-items-center">
          <div className="logo d-flex align-items-center">
            <img src={logo} alt="logo" />
            <a href="#">
              <h3>RollingBoard</h3>
            </a>
          </div>
          <nav class="header-nav d-flex align-items-center">
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>English</li>
          </nav>
          <nav className="header-nav-btn d-flex">
            <button className="btn header-nav-btn">Login</button>
            <button className="btn header-nav-btn">Sign Up</button>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="error-content">
          <div className="container d-flex flex-direction-column align-items-center">
            <h1 className="error-title">Sorry! Page not found</h1>
            <p className="error-text">Head homepage or use the search to find what you're looking for.</p>
            <button className="error-button" onClick={() => navigate(`../`)} >Back to Homepage</button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content d-flex justify-content-space-between align-items-center">
            <div class="footer-logo">
              <a href="#">
                <img src={footerLogoImg} alt="#" />
              </a>
            </div>
            <nav class="footer-nav d-flex align-items-center">
              <li>
                <a href="#">GeoBo</a>
              </li>
              <li>
                <a href="#">Mrdoker1</a>
              </li>
              <li>
                <a href="#">makrakvladislav</a>
              </li>
            </nav>
          </div>
          <div class="footer-text">
            <p>© 2022. React 2022Q1</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ErrorPage;
