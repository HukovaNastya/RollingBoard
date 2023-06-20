import React from "react";
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="container d-flex justify-content-space-between align-items-center">
        <div className="logo d-flex align-items-center">
          <img src={logo} alt="logo" onClick={() => navigate(`/`)}/>
          <Link to='/'> <h3>RollingBoard</h3></Link>
        </div>
        <nav className="header-nav d-flex align-items-center">
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
          <button className="btn header-nav-btn" onClick={() => navigate('/log-in')}>Login</button>
          <button className="btn header-nav-btn" onClick={() => navigate(`/sign-in`)}>Sign Up</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
