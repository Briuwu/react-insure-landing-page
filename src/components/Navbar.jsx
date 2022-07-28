import React, { useState } from 'react'
import IconHamburger from '../images/icon-hamburger.svg'
import IconClose from '../images/icon-close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(prevState => !prevState)
  }

  return (
    <div className='navbar'>
      <h1 className='navbar-logo'>INSURE</h1>

      <div className='navbar-menu'>
        <button onClick={handleMenu}><img src={menu ? IconClose : IconHamburger} alt="" /></button>
        <ul className={`navbar-items ${menu ? 'active' : ''}`}>
          <li className='navbar-items-each'>HOW WE WORK</li>
          <li className='navbar-items-each'>BLOG</li>
          <li className='navbar-items-each'>ACCOUNT</li>
          <li className='navbar-items-each view'>VIEW PLANS</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar