import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='home-page '>
        <div className='main_content d-flex align-items-center justify-content-center'>
          <div className='wrapper'>
            <h1 className='main-heading nowrap text-center'>
              <strong>Join the Modal World</strong>
            </h1>
            <p className='sub-heading text-center pb-3'>
              Become Part of the world's Largest Modelling Community
            </p> 
            <div className='text-center'>
              <NavLink
                to={{
                  pathname: "/sign",
                  userProps: {userType: "photographer"},
                  }}
                  className='btn btn2  d-inline-block text-center mr-4'    
              >I AM A PHOTOGRAPHER
              </NavLink>
              <NavLink
                to={{
                  pathname: "/sign",
                  userProps: {userType: "model"},
                  }}
                className='btn btn2 btn3 d-inline-block text-center'
              >
                I AM A MODAL
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
