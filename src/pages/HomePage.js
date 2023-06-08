import React from 'react';
import './HomePage.css';
import logo from '../assets/logo.png';

const HomePage = () => {
  return (
    <>
     <header className='header'>
       <div className='container d-flex justify-content-space-between align-items-center'>
         <div className="logo d-flex align-items-center">
           <img src={logo} alt="logo"/>
           <a href="#">
             <h3>RollingBoard</h3>
           </a>
         </div>
         <nav class="header-nav d-flex align-items-center">
          <li><a href="#">Projects</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Search</a></li>
          <li><a href="#">About</a></li>
          <li>English</li>
         </nav>
         <nav className='header-nav-btn d-flex'>
           <button class="btn header-nav-btn">Login</button>
           <button class="btn header-nav-btn">Sign Up</button>  
         </nav>
       </div>
     </header>
    </>
  )
}

export default HomePage;