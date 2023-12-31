import React from 'react'
import { useEffect } from 'react';
import {Link, NavLink,} from 'react-router-dom'

function Footer() {
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Adds smooth scrolling behavior
    });
  };
  return (
    <div>
    <footer>                      
        <ul>
               <li><NavLink to='/about' onClick={scrollToTop}>About</NavLink></li> 
               <li><NavLink  to='/home' onClick={scrollToTop}>Home</NavLink></li>
               <li> <NavLink  to='/login' onClick={scrollToTop}>Login</NavLink></li>  
               <li> <NavLink  to='/contacts' onClick={scrollToTop}>Contact</NavLink></li> 
               
                </ul>
                <div className='icons'>
                <a href='https://wa.me/+254740550484' target='_blank'> <em><box-icon name='whatsapp' type='logo' ></box-icon>Whatsapp</em></a>
                <a href='https://www.facebook.com/johanagikonyo552@gmail.com' target='_blank'> <em><box-icon name='facebook' type='logo' ></box-icon>Facebook</em></a>
                <a href='https://www.twitter.com/@GikonyoJohana' target='_blank'>  <em><box-icon name='twitter' type='logo' ></box-icon>Twitter</em></a>
                <a href='https://www.instagram.com/johanagikonyo552@gmail.com' target='_blank'><em><box-icon name='instagram' type='logo' ></box-icon>Instagram</em></a>
                </div>
                <em>Copywrite@jgk{new Date().getFullYear()}</em>
        </footer> 
        
    </div>
  )
}

export default Footer

