import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
function Success() {
  const location=useLocation()
  return (
    <div className='success'>
    <div>Congratulations {location.state.id} and welcome to this Community!</div>
    <p>Feel apprecited, and wait for more guidelines...</p>
    <NavLink to='/home'>Back Home</NavLink>
    </div>
  )
}

export default Success