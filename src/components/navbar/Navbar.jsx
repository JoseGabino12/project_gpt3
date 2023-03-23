import React from 'react'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

import './navbar.css'

const Navbar = () => {
  return (
    <div className='gpt3_navbar'>
      <div className='gpt3_navbar_links'>
        <div className='gpt3_navbar_links_logo'>
          <img src={logo} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
