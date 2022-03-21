import React, { useState, Suspense, useEffect } from 'react'
import './header.css';



const Header = () => {
  
  return (
    
    <div className='portfolio__header section__padding' id='home'>
              
      <div className='portfolio__header-content'>
        
     
        <h1 className='gradient__text'>Welcome to the portfolio of Julien Desjardin</h1>
        <p>to receive my CV, thank youi to enter your email address below, in some minutes, you'll gonna receive my cv by email.</p>

        <div className='portfolio__header-content__input'>
          <input type="email" placeholder='Your Email Address'/>
          <button type='button'>Receive</button>
        </div>

        <div className='portfolio__header-content__people'>
          <p>150 people requested my CV last 24 hours</p>
        </div>
        </div>
  
       
      </div>
    
);
}
export default Header