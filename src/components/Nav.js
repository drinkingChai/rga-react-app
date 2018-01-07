import React from 'react'

// styles
import '../css/Nav.css'

// assets 
import logo from '../assets/logo.png'

export default function (props) {
  return (
    <nav className='Nav'>
      <a href='/'><img src={logo} alt='Logo' /></a>
    </nav>
  )
}