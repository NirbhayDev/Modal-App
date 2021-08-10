import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Dehaze } from '@material-ui/icons'
import './SideNavbar.css'

const SideNavbar = () => {
  const [isShowMenu, setShowMenu] = useState(false)
  return (
    <div className='sidePanel' style={{ left: isShowMenu ? '0' : '-240px' }}>
      <nav className='navbar sideNavbar'>
        <div className='sideNavSec'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/dashboard'>Dashboard</Link>
            </li>
          </ul>
        </div>

        <div className='sideNavSec'>
          <h4>Account</h4>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link'>Profile</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link'>Photos</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link'>Lists</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link'>Castings</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link'>Timeline</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link'>Settings</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/timeline'>Support</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link'>Upgrade Account</Link>
            </li>
          </ul>
        </div>

        <div className='sideNavSec'>
          <h4>People</h4>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link'>Credits</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link'>Friends</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link'>Friend Requests</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link'>Contests</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link'>Contests</Link>
            </li>
          </ul>
        </div>
      </nav>
      <button className='btnSideNav' onClick={() => { setShowMenu(!isShowMenu) }}>
        <Dehaze />
      </button>
    </div>
  )
}
export default SideNavbar
