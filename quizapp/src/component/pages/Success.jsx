import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
function Success() {
  const location=useLocation()
  return (
    <div>
    <div>Weldone {location.state.id} and welcome to this Community</div>
    <NavLink to='/home'>Back Home</NavLink>
    </div>
  )
}

export default Success