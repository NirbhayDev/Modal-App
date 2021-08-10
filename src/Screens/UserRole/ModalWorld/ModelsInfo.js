import React, { useEffect, useState } from 'react'
import './ModelsInfo.css'
import Navbar from '../../../Components/Navbar/Navbar'
import kat from './../../../assets/kate-bigImg.png'
import CommonHeader from './UI/CommonHeader'
import PhotograpgherInfo from './UI/PhotograpgherInfo'
import Genres from './UI/Genres'
import Friends from './UI/Friends'
import FollowMe from './UI/FollowMe'
import ModalsFev from './UI/ModalsFev'
import Aboutme from './UI/Aboutme'
import Credits from './UI/Credits'
import ModalsDetails from './UI/ModalsDetails'

import UserComment from './UI/UserComment'
import { getDocumentById } from '../../../firebase/firestore/getData'
const ModelsInfo = () => {
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    const userID = localStorage.getItem('userID')
    if (userID) {
      getDocumentById('users', userID, (data) => {
        if (data) {
          console.log(data)
          setUserInfo(data)
        } else {
          alert('No record found !')
        }
      })
    }
  }, [])

  // const getGeneres = userInfo.generes.split(",")

  return (
    <>
      <Navbar />
      <section className='py-3'>
        <CommonHeader />
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
                  <img src={userInfo.profile_photo && userInfo.profile_photo != '' ? userInfo.profile_photo : kat} alt='Alex' className='mb-3 w-100' />
                  <PhotograpgherInfo
                    email={userInfo.email ? userInfo.email : ''}
                    phone={userInfo.contact_no ? userInfo.contact_no : ''}
                    photosCount='0 photos'
                    status={userInfo.marital_status ? userInfo.marital_status : ''}
                    location={userInfo.city ? <p>{userInfo.city + ', ' + userInfo.country}</p> : ''}
                    user_name={userInfo.user_name ? userInfo.user_name : ''}
                  />
                  {/* <Genres generes={userInfo.generes ? userInfo.generes : ''} /> */}
                  <Friends />
                  <FollowMe />
                  <ModalsFev />
                </div>
                <div className='col-lg-9 col-md-8'>
                  <Aboutme content={userInfo.about_us ? userInfo.about_us : ''} />
                  {/* <ModalsDetails detail={userInfo.other_details ? userInfo.other_details : ''} /> */}
                  <div className='card-body rounded-xl p-sm-5 p-3 black-bg'>
                    <Credits />
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
export default ModelsInfo
