import React from 'react'
import './Header.css'

function Header() {
  return (
      <header className='Header'>
        <img src="https://res.cloudinary.com/djovfpru8/image/upload/v1679301055/download_nom3wg.svg" className='Logo' alt="Logo" />
      <nav className='Nav'>
        <a className='' href='/'>Home</a>
        <a href='/login'>Login</a>
        <a href='/Register'>Register</a>
      </nav>
      </header>
  )
}

export default Header
