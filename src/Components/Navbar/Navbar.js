import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NotificationsNone } from '@material-ui/icons'
import logo from '../../assets/logo.png'
import user from '../../assets/kate.png'
import './Navbar.css'

const Navbar = () => {
  const [isLogin, setisLogin] = useState(true)
  const [showLogin, setShowLogin] = useState(true)
  const [isShowMenu, setShowMenu] = useState(false)

  return (
    <nav className='navbar navbar-expand-lg navBg'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/'>
          <img src={logo} className='logo' alt='logo' />
        </NavLink>
        {isLogin
          ? <>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse navSideSec' id='navbarTogglerDemo02'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link className='nav-link active' to='/search-artist'>Browse</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link active' to='/plan'>Plan</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link'>Castings</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link'>Contests</Link>
                </li>
              </ul>

              <ul className='navbar-nav align-items-center'>
                <li className='nav-item dropdown'>
                  <Link className='nav-link notification-bell'>
                    <NotificationsNone />
                  </Link>
                  <div className='dropdown-menu dropdown-menu-lg dropdown-menu-center mt-2 py-0'>
                    <div className='list-group list-group-flush'>
                      <Link className='text-center text-primary fw-bold border-bottom border-light py-3'>Notifications</Link>
                      <Link className='list-group-item list-group-item-action border-bottom'>
                        <div className='row align-items-center'>
                          <div className='col-auto'> <img alt='Image placeholder' src='../../assets/img/team/profile-picture-1.jpg' className='avatar-md rounded' /></div>
                          <div className='col ps-0 ms-2'>
                            <div className='d-flex justify-content-between align-items-center'>
                              <div>
                                <h4 className='h6 mb-0 text-small'>Jose Leos</h4>
                              </div>
                              <div className='text-end'><small className='text-danger'>a few moments ago</small></div>
                            </div>
                            <p className='font-small mt-1 mb-0'>Added you to an event "Project stand-up" tomorrow at 12:30 AM.</p>
                          </div>
                        </div>
                      </Link>
                      <Link className='dropdown-item text-center fw-bold rounded-bottom py-3'>View All</Link>
                    </div>
                  </div>
                </li>
                <li className='nav-item dropdown ms-lg-3'>
                  <button className='btnNavAvtar' onClick={() => { setShowMenu(!isShowMenu) }}>
                    <div className='media d-flex align-items-center'>
                      <img className='avatar rounded-circle' alt='Image placeholder' src={user} />
                    </div>
                  </button>
                  {isShowMenu
                    ? <div className='dropdownMenu mt-2 py-1'>
                      <Link className='dropdown-item d-flex align-items-center' to='/dashboard'>Dashboard</Link>
                      <div role='separator' className='dropdown-divider my-1' />
                      <Link className='dropdown-item d-flex align-items-center' to='/timeline'>Timeline</Link>
                      <div role='separator' className='dropdown-divider my-1' />
                      <Link className='dropdown-item d-flex align-items-center' to='/edit-profile'>Edit Profile</Link>
                      <div role='separator' className='dropdown-divider my-1' />
                      <Link className='dropdown-item d-flex align-items-center' to=''>Logout</Link>
                      </div>
                    : null}
                </li>
              </ul>
            </div>
          </>
          : <>
            {showLogin ? <Link className='btn btn-primary btn-lg btnHeadLogin' to='/login'>Login</Link> : null}
          </>}
      </div>
    </nav>
  )
}
export default Navbar
