import React from "react";
import footerLogoImg from '../assets/footer-logo.png';
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content d-flex justify-content-space-between align-items-center">
          <div className="footer-logo">
            <a href="#">
              <img src={footerLogoImg} alt="logo" onClick={() => navigate(`/`)}/>
            </a>
          </div>
          <nav className="footer-nav d-flex align-items-center">
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
        <div className="footer-text">
          <p>© 2022. React 2022Q1</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
