import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Footer() {
  return (
    <div>
    <footer>                      
        <ul>
               <li><NavLink to='/'>About</NavLink></li> 
               <li> <NavLink  to='/contacts'>Contact</NavLink></li> 
               <li><NavLink  to='/home'>Home</NavLink></li> 
               
                </ul>
                <div className='icons'>
                <em><box-icon name='whatsapp' type='logo' ></box-icon>Whatsapp</em>
                <em><box-icon name='facebook' type='logo' ></box-icon>Facebook</em>
                <em><box-icon name='twitter' type='logo' ></box-icon>Twitter</em>
                <em><box-icon name='instagram' type='logo' ></box-icon>Instagram</em></div>
                <em>Copywrite@jgk{new Date().getFullYear()}</em>
        </footer> 
        
    </div>
  )
}

export default Footer

