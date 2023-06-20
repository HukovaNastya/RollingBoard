import React from 'react';

const Form = ({children}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <div className="gradient-border">
      <form onSubmit={handleSubmit} className='auth-form'> 
        {children}
      </form>
    </div>

  )
}

export default Form;