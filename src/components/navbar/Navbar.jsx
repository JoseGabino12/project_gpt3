import React, { useState } from 'react'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import { Menu } from './components/Menu'
import './navbar.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='gpt3_navbar'>
      <div className='gpt3_navbar_links'>
        <div className='gpt3_navbar_links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3_navbar_links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3_navbar_sign'>
        <p>Sign in</p>
        <button type='button'>Sign in</button>
      </div>
      <div className='gpt3_navbar_menu'>
        {toggle ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line color='#fff' size={27} onClick={() => setToggle(true)} />
        )}

        {toggle && (
          <div className='gpt3_navbar_menu_container scale_up_center'>
            <div className='gpt3_navbar_menu_container_links'>
              <Menu />
              <div className='gpt3_navbar_menu_container_links_sign'>
                <p>Sign in</p>
                <button type='button'>Sign in</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
