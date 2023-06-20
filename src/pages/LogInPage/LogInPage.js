import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import tickImg from '../../assets/availible.svg';
import { Link } from "react-router-dom";

const LogInPage = () => {
  return (
    <div>
      <Header /> 
      <section className='auth-wrapper full-height d-flex  justify-content-center'>
        <div className='container d-flex align-items-center justify-content-evenly'>
          <div className='info-box d-flex flex-direction-column'>
            <div className='d-flex align-items-center'>
              <img className='info-img' src={tickImg} alt="#"/>
              <h3 className='info-box-type-title'>Project Management App</h3>
            </div>
            <h1 className='project-features-info-box-title'>Everything you need in one place</h1>
            <p className='project-features-info-box-text'>Manage your boards using Drag-n-Drop, create adittional boards and tasks.</p>
          </div>
          <div>
           <Form>
            <div>
              <h3 className='title title-h2 title-large'>Log in to your account</h3>
            </div>
            <div className='form-wrapper d-flex flex-direction-column'>
              <div className='form-container d-flex flex-direction-column'>
                <label for="login">Login</label>
                <input
                  id="login"
                  className='input-text'
                  type="email"
                  name="email"
                  placeholder='email'
                />
              </div>
              <div className='form-container d-flex flex-direction-column'>
                <label for="login">Password</label>
                <input
                  id="password"
                  className='input-text'
                  type="password"
                  name="password"
                  placeholder='passwords'
                />
              </div>
              <div>
                 <h3 className='text text-medium'>Don't have an account? <span className='span-text text'><Link to='/sign-in'>Sign up</Link></span></h3>
               </div>
               <div className='button-wrapper'>
                 <button className='button-default'>Login</button>
               </div>
            </div>
           </Form>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default LogInPage;