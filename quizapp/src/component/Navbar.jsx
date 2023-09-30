import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react'
function Navbar() {
  const [menuOpen, setMenuOpen]=useState(false)
  return (
    <div>
        <nav>
        <NavLink to='/web' className='title'>MyWebsite</NavLink>

        <div className='menu' onClick={()=>{
          setMenuOpen(!menuOpen)
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
            <ul className={menuOpen? "open":""}>
               <li><NavLink to='/'><box-icon name='info-circle' type='solid' style={{backgroundColor:'yellow',margin:'3px'}}></box-icon>About</NavLink></li> 
               <li> <NavLink  to='/contacts'><box-icon type='solid' name='phone-call'style={{backgroundColor:'yellow',margin:'3px'}}></box-icon>Contact</NavLink></li> 
               <li><NavLink  to='/home'><box-icon name='home-alt-2' style={{backgroundColor:'yellow',margin:'3px'}}></box-icon>Home</NavLink></li> 
                </ul>
                
        </nav>
        
    </div>
  )
}

export default Navbar

