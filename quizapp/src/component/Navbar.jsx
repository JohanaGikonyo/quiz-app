import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react'
import img1 from './pages/images/pexels-vincenzo-malagoli-2922140.jpg'
function Navbar() {
  const [menuOpen, setMenuOpen]=useState(false)
  return (
    <div>
        <nav>
        <NavLink to='/' className='title'><img src={img1} alt='Web logo'/></NavLink>

        <div className='menu' onClick={()=>{
          setMenuOpen(!menuOpen)
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
            <ul className={menuOpen? "open":""}>
            <li><NavLink  to='/home'><box-icon name='home-alt-2' style={{backgroundColor:'yellow',margin:'3px'}}></box-icon>Home</NavLink></li> 
               <li><NavLink to='/about'><box-icon name='info-circle' type='solid' style={{backgroundColor:'yellow',margin:'3px'}}></box-icon>About</NavLink></li> 
               <li> <NavLink  to='/contacts'><box-icon type='solid' name='phone-call'style={{backgroundColor:'yellow',margin:'3px'}}></box-icon>Contact</NavLink></li> 
               <li> <NavLink  to='/login'>Register Member</NavLink></li> 
               <li> <NavLink  to='/success'>Success</NavLink></li>
                </ul>
                
        </nav>
        
    </div>
  )
}

export default Navbar

