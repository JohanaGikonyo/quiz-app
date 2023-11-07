import React from 'react'
import { useLocation } from 'react-router-dom'

function Success() {
  const location=useLocation()
  return (
    <div>Weldone {location.state.id} and welcome to this Community</div>
  )
}

export default Success