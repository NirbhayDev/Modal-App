import React from 'react'
import './Modelworld.css'
import Navbar from '../../../Components/Navbar/Navbar'
import CommonHeader from './UI/CommonHeader'
import PhotograpgherInfo from './UI/PhotograpgherInfo'
import Genres from './UI/Genres'
import Friends from './UI/Friends'
import FollowMe from './UI/FollowMe'
import ModalsFev from './UI/ModalsFev'
import Aboutme from './UI/Aboutme'
import Credits from './UI/Credits'
import photographer from './../../../assets/photographer.png'

import UserComment from './UI/UserComment'

const ModelWorld = () => {
  return (
    <>
      {/* top Navbar */}
      <Navbar />
      <section className='py-3'>
        {/* CommonHeader */}
        <CommonHeader />
        {/* tab */}
        <div className='container'>
          <div className='tab-content' id='pills-tabContent'>
            <div
              className='tab-pane fade show active'
              id='pills-info'
              role='tabpanel'
              aria-labelledby='pills-info-tab'
            >
              <div className='row'>
                <div className='col-lg-3 col-md-4'>
                  <img src={photographer} alt='Alex' className='mb-3 ' />
                  {/* information of photographer */}
                  <PhotograpgherInfo
                    email='alex@xyx.com'
                    phone='+0123456789'
                    photosCount='500 photos'
                    status='single'
                    location='Las Vegas, USA'
                  />
                  {/* Genres section */}
                  <Genres />
                  {/* Friends section */}
                  <Friends />
                  {/* follow me section */}
                  <FollowMe />
                  {/* Favorites Modals */}
                  <ModalsFev />
                </div>
                <div className='col-lg-9 col-md-8'>
                  {/* about me */}
                  <Aboutme />
                  <div className='card-body rounded-xl p-sm-5 p-3 black-bg'>
                    {/* Credits */}
                    <Credits />
                    {/* users */}
                    <div className='m-5'>
                      <UserComment />
                      <UserComment />
                      <UserComment />
                      <UserComment />
                      <UserComment />
                      <UserComment />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ModelWorld
