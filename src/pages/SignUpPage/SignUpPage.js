import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import tickImg from '../../assets/availible.svg';
import '../SignUpPage/SignUp.css';
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div>
      <Header />
      <section className='sign-up full-height'>
        <div className='container d-flex justify-content-evenly'>
          <div className='info-box d-flex flex-direction-column'>
            <div className='d-flex'>
              <img className='info-img' src={tickImg} alt="#"/>
              <h3 className='info-box-type-title'>Project Management App</h3>
            </div>
            <h1 className='project-features-info-box-title'>Everything you need in one place</h1>
            <p className='project-features-info-box-text'>Manage your boards using Drag-n-Drop, create adittional boards and tasks.</p>
          </div>
          <div>
           <Form>
             <div className='form-wrapper d-flex flex-direction-column'>
               <div>
                 <h3 className='title title-h2 title-large'>Sign up</h3>
               </div>
               <div className='form-box'>
                 <label className='auth-label'>
                   Name
                   <input
                     className='input-text'
                     type="text"
                     name="firstName"
                     placeholder='name'
                   />
                 </label>
               </div>
               <div className='form-box'>
                 <label className='auth-label'>
                   Login
                   <input
                     className='input-text'
                     type="email"
                     name="email"
                     placeholder='email'
                   />
                 </label>
               </div>
               <div className='form-box'>
                 <label className='auth-label'>
                   Password
                   <input
                     className='input-text'
                     type="password"
                     name="password"
                     placeholder='passwords'
                   />
                 </label>
               </div>
               <div>
                <h3 className='text text-medium'>Already have an account? <span className='span-text text'><Link to='/log-in'>Sign in</Link></span></h3>
               </div>
               <div className='button-wrapper'>
                 <button className='button-default'>Create an Account</button>
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

export default SignUpPage;
