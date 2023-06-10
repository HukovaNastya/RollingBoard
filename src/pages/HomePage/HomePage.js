import React from 'react';
import '../HomePage/HomePage.css';
import logo from '../../assets/logo.png';
import integrateImg from '../../assets/integrate.png';
import colaborateImg from '../../assets/colaborate.png';
import succeedImg from '../../assets/succeed.png';
import availibleImg from '../../assets/availible.svg';
import projectsImg from '../../assets/projects.png';
import unlimitedImg from '../../assets/unlimited.png';
import footerLogoImg from '../../assets/footer-logo.png';

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
           <button className="btn header-nav-btn">Login</button>
           <button className="btn header-nav-btn">Sign Up</button>  
         </nav>
       </div>
     </header>
     <main id="main">
       <section className='about-project'>
        <div className='container d-flex flex-direction-column align-items-center'>
          <h3 className='about-project-type-title'>Project Management App</h3>
          <h1 className='about-project-title'>Colaborate and build faster, together.</h1>
          <p className='about-project-text'>Create, share, and get feedback with collaborative boards for rapid development.</p>
          <button className="about-project-btn">Create Kanban Board</button>
        </div>
       </section>
       <section className="project-advantages">
         <div className='container d-flex justify-content-center'>
         <div className='project-advantages-card d-flex flex-direction-column align-items-center'>
           <img className='project-advantages-card-img' src={integrateImg} alt="img"/>
           <h3 className='project-advantages-card-title'>Integrate</h3>
           <p className='project-advantages-card-text'>The ability to quickly set up and customize workflows for just about anything.</p>
          </div>
          <div className='project-advantages-card d-flex flex-direction-column align-items-center'>
            <img className='project-advantages-card-img' src={colaborateImg} alt="img"/>
            <h3 className='project-advantages-card-title'>Colaborate</h3>
            <p className='project-advantages-card-text'>Manage projects, organize tasks, and build team spirit—all in one place.</p>
          </div>
          <div className='project-advantages-card d-flex flex-direction-column align-items-center'>
            <img className='project-advantages-card-img' src={succeedImg} alt="img"/>
            <h3 className='project-advantages-card-title'>Succeed</h3>
            <p className='project-advantages-card-text'>Every single part of your task can be managed, tracked, and shared with teammates.</p>
          </div>
         </div>
       </section>
       <section className='project-features universal d-flex justify-content-center'>
        <div className='project-features-info-box d-flex flex-direction-column'>
          <div className='d-flex'>
            <img className='info-img' src={availibleImg} alt="#"/>
            <h3 className='info-box-type-title'>Universal</h3>
          </div>
          <h1 className='project-features-info-box-title'>Build the workflow you want</h1>
          <p className='project-features-info-box-text'>Manage your boards using Drag-n-Drop, create adittional boards and tasks.</p>
        </div>
        <div className='project-features-info-img-box'>
          <img src={projectsImg} alt="#"/>
       </div>
       </section>
       <section className='project-features-unlimited'>
        <div className='container d-flex '>
          <div className='project-features-info-box d-flex flex-direction-column'>
            <div className='d-flex'>
              <img className='info-img' src={availibleImg} alt="#"/>
              <h3 className='info-box-type-title'>Unlimited</h3>
            </div>
            <h1 className='project-features-info-box-title'>Build the workflow you want</h1>
            <p className='project-features-info-box-text'>Manage your boards using Drag-n-Drop, create adittional boards and tasks.</p>
          </div>
          <div className='project-features-info-img-box'>
            <img src={unlimitedImg} alt="#"/>
          </div>
        </div>
       </section>
     </main>
     <footer className ="footer">
      <div className='container'>
        <div className='footer-content d-flex justify-content-space-between align-items-center'>
          <div class="footer-logo">
            <a href="#">
              <img src={footerLogoImg} alt="#"/>
            </a>
          </div>
          <nav class="footer-nav d-flex align-items-center">
            <li><a href="#">GeoBo</a></li>
            <li><a href="#">Mrdoker1</a></li>
            <li><a href="#">makrakvladislav</a></li>
          </nav>
        </div>
        <div class="footer-text">
          <p>© 2022. React 2022Q1</p>
        </div>
      </div> 
     </footer>
    </>
  )
}

export default HomePage;