import React, { useState, useEffect } from 'react'
import './ModelsImageGallery.css'
import { NavLink, Link } from 'react-router-dom'
import Navbar from '../../../Components/Navbar/Navbar'
import kat from './../../../assets/kate-bigImg.png'
import CommonHeader from './UI/CommonHeader'
import PhotograpgherInfo from './UI/PhotograpgherInfo'
import Genres from './UI/Genres'
import Friends from './UI/Friends'
import FollowMe from './UI/FollowMe'
import ModalsFev from './UI/ModalsFev'
import Gallery from './UI/Gallery'
import { getImageGallary } from '../../../firebase/firestore/getData'

const ModelsImageGallery = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const userID = localStorage.getItem('userID')
    if (userID) {
      getImageGallary('users', userID, (data) => {
        if (data) {
          console.log(data)
          setUrls(data?.ImageData||[])
        } else {
         // alert('No record found !')
        }
      })
    }

  }, [])

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
                  <img src={kat} alt='Alex' className='mb-3 w-100' />
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
                  <div className='d-block text-right'><Link to='/upload-photos' className='btn text-white rounded-pill px-sm-4 px-1 mb-3 pink-bg pink-border'>Upload Photos</Link></div>
                  <Gallery urls={urls} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ModelsImageGallery
