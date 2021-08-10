import React, { useState } from 'react'
import './Timeline.css'
import { CircularProgress, IconButton } from '@material-ui/core'
import LineChart from 'react-linechart'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import Navbar from '../../../Components/Navbar/Navbar'
import SideNavbar from '../../../Components/SideNavbar/SideNavbar'
import user from '../../../assets/kate-bigImg.png'
import ModelImage from '../../../assets/model_img.jpg'
import PermMediaIcon from '@material-ui/icons/PermMedia'
import MovieCreationIcon from '@material-ui/icons/MovieCreation'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import MoodIcon from '@material-ui/icons/Mood'
import Button from '@material-ui/core/Button'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import NearMeIcon from '@material-ui/icons/NearMe'

const Dashboard = (props) => {
  return (
    <>
      <Navbar />
      <SideNavbar />
      <div className='container sectionbg mt-3'>
        <div className='mb-4 mt-2'>
          <h4>Timeline</h4>
        </div>

        <div className='row'>
          <div className='col-md-6 col-lg-6'>
            <div className='info-card_1 '>
              <div className='media d-flex align-items-center mt-1'>
                <img
                  className='avatar rounded-circle'
                  alt='Image placeholder'
                  src={user}
                />
                <input
                  type='text'
                  class='form-control whathppng'
                  placeholder="What's Happening?"
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </div>
              <div className='mediabtn'>
                <div className='d-flex ml-5 mt-3 '>
                  <IconButton aria-label='media'>
                    <PermMediaIcon style={{ color: '#2196f3' }} />
                  </IconButton>
                  <IconButton aria-label='media'>
                    <MovieCreationIcon style={{ color: '#2196f3' }} />
                  </IconButton>
                  <IconButton aria-label='media'>
                    <InsertDriveFileIcon style={{ color: '#2196f3' }} />
                  </IconButton>
                  <IconButton aria-label='media'>
                    <MoodIcon style={{ color: '#2196f3' }} />
                  </IconButton>
                </div>
                <div className='ml-auto'>
                  <Button variant='contained' className='mt-4 postbtn'>
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-lg-6 scndcol'>
            <div className='info-card_2'>
              <div className='d-flex mt-2'>
                <h4>Reminder</h4>
                <AccessAlarmIcon className='alarmicon ml-3 ' />
              </div>
              <div className='mt-3'>
                <p>
                  "You haven't got long left to book in your ground <br />{' '}
                  works"
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='timelinediv mt-3'>
          <div className='text-center   '>
            <h4>Today</h4>
            <ArrowDropDownIcon className='arrowdown' />
          </div>
          <div>
            <VerticalTimeline>
              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                contentStyle={{ background: '#0b0e12', color: '#fff' }}
                contentArrowStyle={{
                  borderRight: '15px solid  #0b0e12'
                }}
                icon={<ArrowLeftIcon />}
              >
                <h4 className='vertical-timeline-element-title d-flex align-items-center text-white'>
                  <div className='mr-2'>
                    <img
                      className='avatar rounded-circle'
                      alt='Image placeholder'
                      src={user}
                    />
                  </div>
                  Kate upton
                </h4>
                <h6 className='vertical-timeline-element-subtitle ml-5  font-weight-normal'>
                  Yesterday 10:10 am
                </h6>
                <img
                  className='modelimg mt-3'
                  alt='Image placeholder'
                  src={user}
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  <span style={{ fontSize: '15px' }}> @standard </span>dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it.
                  <span style={{ fontSize: '15px' }}> www.loremipsum.com</span>
                </p>
                <div className='d-flex text-align-center '>
                  <IconButton color='secondary' aria-label='like'>
                    <FavoriteBorderIcon className='mt-3 mr-1' />
                    <p className='text-white  '>101</p>
                  </IconButton>
                  <IconButton color='secondary' aria-label='comment'>
                    <ChatBubbleOutlineIcon className='mt-3 mr-1' />
                    <p className='text-white  '>20</p>
                  </IconButton>
                  <IconButton color='secondary' aria-label='comment'>
                    <BookmarkBorderIcon className='mt-3 mr-1' />
                    <p className='text-white  '>10</p>
                  </IconButton>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='vertical-timeline-element--work--2 arrowright'
                contentStyle={{ background: '#0b0e12', color: '#fff' }}
                icon={<ArrowRightIcon />}
                contentArrowStyle={{
                  borderRight: '15px solid  #0b0e12'
                }}
              >
                <h4 className='vertical-timeline-element-title d-flex align-items-center text-white'>
                  <div className='mr-2'>
                    <img
                      className='avatar rounded-circle'
                      alt='Image placeholder'
                      src={user}
                    />
                  </div>
                  Kate upton
                </h4>
                <h6 className='vertical-timeline-element-subtitle ml-5  font-weight-normal'>
                  Yesterday 12:11 pm
                </h6>
                <img
                  className='modelimg mt-3'
                  alt='Image placeholder'
                  src={user}
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  <span style={{ fontSize: '15px' }}> @standard </span>dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it.
                  <span style={{ fontSize: '15px' }}> www.loremipsum.com</span>
                </p>
                <div className='d-flex text-align-center '>
                  <IconButton color='secondary' aria-label='like'>
                    <FavoriteBorderIcon className='mt-3 mr-1' />
                    <p className='text-white  '>101</p>
                  </IconButton>
                  <IconButton color='secondary' aria-label='comment'>
                    <ChatBubbleOutlineIcon className='mt-3 mr-1' />
                    <p className='text-white  '>20</p>
                  </IconButton>
                  <IconButton color='secondary' aria-label='comment'>
                    <BookmarkBorderIcon className='mt-3 mr-1' />
                    <p className='text-white  '>10</p>
                  </IconButton>
                </div>
                <div className='cmntboxdiv'>
                  <div>
                    <h6 className='vertical-timeline-element-title d-flex align-items-center text-white'>
                      <div className='mr-2 mt-2'>
                        <img
                          className='avatar rounded-circle '
                          alt='Image placeholder'
                          src={user}
                          style={{ fontSize: '10px' }}
                        />
                      </div>
                      Alex Smith
                    </h6>
                    <p
                      style={{ fontSize: '10px', marginTop: '-15px' }}
                      className='vertical-timeline-element-subtitle ml-5  font-weight-normal'
                    >
                      Yesterday 12:11 pm
                    </p>
                    <p style={{ fontSize: '10px', marginLeft: '50px' }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{' '}
                    </p>
                    <div className='d-flex text-align-center ml-4'>
                      <IconButton color='secondary' aria-label='like'>
                        <FavoriteBorderIcon className='mt-3 mr-1' />
                        <p className='text-white  '>10</p>
                      </IconButton>
                      <input
                        type='text'
                        class='form-control whathppng mt-3'
                        placeholder='Reply'
                        aria-label='Username'
                        aria-describedby='basic-addon1'
                      />
                    </div>
                  </div>
                  <hr />
                  <div>
                    <h6 className='vertical-timeline-element-title d-flex align-items-center text-white'>
                      <div className='mr-2 mt-2'>
                        <img
                          className='avatar rounded-circle '
                          alt='Image placeholder'
                          src={user}
                          style={{ fontSize: '10px' }}
                        />
                      </div>
                      Leena
                    </h6>
                    <p
                      style={{ fontSize: '10px', marginTop: '-15px' }}
                      className='vertical-timeline-element-subtitle ml-5  font-weight-normal'
                    >
                      Yesterday 12:11 pm
                    </p>
                    <p style={{ fontSize: '10px', marginLeft: '50px' }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{' '}
                    </p>
                    <div className='d-flex text-align-center ml-4'>
                      <IconButton color='secondary' aria-label='like'>
                        <FavoriteBorderIcon className='mt-3 mr-1' />
                        <p className='text-white  '>6</p>
                      </IconButton>
                      <input
                        type='text'
                        class='form-control whathppng mt-3'
                        placeholder='Reply'
                        aria-label='Username'
                        aria-describedby='basic-addon1'
                      />
                    </div>
                  </div>
                </div>
                <div className='rplydiv mt-1'>
                  <div>
                    <div class='input-group dwnrply mb-3'>
                      <input
                        type='text'
                        class='form-control dwnrply mt-1'
                        placeholder='Write your comment here...'
                        aria-label="Recipient's username"
                        aria-describedby='button-addon2'
                      />
                      <div class='input-group-append'>
                        <button class='btn mt-1' type='button'>
                          <NearMeIcon style={{ color: '#f50057' }} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='vertical-timeline-element--work--3'
                contentStyle={{ background: '#0b0e12', color: '#fff' }}
                icon={<ArrowLeftIcon />}
                contentArrowStyle={{
                  borderRight: '15px solid  #0b0e12'
                }}
              >
                <h4 className='vertical-timeline-element-title d-flex align-items-center text-white'>
                  <div className='mr-2'>
                    <img
                      className='avatar rounded-circle'
                      alt='Image placeholder'
                      src={user}
                    />
                  </div>
                  Alex Smith
                </h4>
                <h6 className='vertical-timeline-element-subtitle ml-5  font-weight-normal'>
                  Yesterday 12:11 pm
                </h6>
                <img
                  className='modelimg mt-3'
                  alt='Image placeholder'
                  src={user}
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  <span style={{ fontSize: '15px' }}> @standard </span>dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it.
                  <span style={{ fontSize: '15px' }}> www.loremipsum.com</span>
                </p>
                <div className='d-flex text-align-center '>
                  <IconButton color='secondary' aria-label='like'>
                    <FavoriteBorderIcon className='mt-3 mr-1' />
                    <p className='text-white  '>101</p>
                  </IconButton>
                  <IconButton color='secondary' aria-label='comment'>
                    <ChatBubbleOutlineIcon className='mt-3 mr-1' />
                    <p className='text-white  '>20</p>
                  </IconButton>
                  <IconButton color='secondary' aria-label='comment'>
                    <BookmarkBorderIcon className='mt-3 mr-1' />
                    <p className='text-white  '>10</p>
                  </IconButton>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='vertical-timeline-element--work--4 arrowright'
                contentStyle={{ background: '#0b0e12', color: '#fff' }}
                icon={<ArrowRightIcon />}
                contentArrowStyle={{
                  borderRight: '15px solid  #0b0e12'
                }}
              >
                <h4 className='vertical-timeline-element-title d-flex align-items-center text-white'>
                  <div className='mr-2'>
                    <img
                      className='avatar rounded-circle'
                      alt='Image placeholder'
                      src={user}
                    />
                  </div>
                  Kate upton
                </h4>
                <h6 className='vertical-timeline-element-subtitle ml-5  font-weight-normal'>
                  Yesterday 10:10 am
                </h6>
                <img
                  className='modelimg mt-3'
                  alt='Image placeholder'
                  src={ModelImage}
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  <span style={{ fontSize: '15px' }}> @standard </span>dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it.
                  <span style={{ fontSize: '15px' }}> www.loremipsum.com</span>
                </p>
                <div className='d-flex text-align-center '>
                  <IconButton color='secondary' aria-label='like'>
                    <FavoriteBorderIcon className='mt-3 mr-1' />
                    <p className='text-white  '>101</p>
                  </IconButton>
                  <IconButton color='secondary' aria-label='comment'>
                    <ChatBubbleOutlineIcon className='mt-3 mr-1' />
                    <p className='text-white  '>20</p>
                  </IconButton>
                  <IconButton color='secondary' aria-label='comment'>
                    <BookmarkBorderIcon className='mt-3 mr-1' />
                    <p className='text-white  '>10</p>
                  </IconButton>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='vertical-timeline-element--education--7'
                contentStyle={{
                  background: '#0b0e12',
                  color: '#fff',
                  height: '350px'
                }}
                icon={<ArrowLeftIcon />}
                contentArrowStyle={{
                  borderRight: '15px solid  #0b0e12'
                }}
              >
                <h4 className='vertical-timeline-element-title d-flex align-items-center text-white'>
                  <div className='mr-2'>
                    <img
                      className='avatar rounded-circle'
                      alt='Image placeholder'
                      src={user}
                    />
                  </div>
                  Alex Smith
                </h4>
                <h6 className='vertical-timeline-element-subtitle ml-5  font-weight-normal'>
                  Yesterday 12:11 am
                </h6>
                <div className='appntmentdiv mt-5'>
                  <div className='row'>
                    <div className='col-md-8 d-flex align-items-center'>
                      <CheckBoxIcon className='checkicn mr-2' />
                      <h4>Appointment Project Manager</h4>
                    </div>
                    <div className='col-md-4'>
                      <h4>14 August 3.30 PM</h4>
                    </div>
                  </div>
                </div>

                <div className='d-flex text-align-center '>
                  <IconButton color='secondary' aria-label='like'>
                    <FavoriteBorderIcon className='mt-3 mr-1' />
                    <p className='text-white  '>101</p>
                  </IconButton>
                  <IconButton color='secondary' aria-label='comment'>
                    <ChatBubbleOutlineIcon className='mt-3 mr-1' />
                    <p className='text-white  '>20</p>
                  </IconButton>
                  <IconButton color='secondary' aria-label='comment'>
                    <BookmarkBorderIcon className='mt-3 mr-1' />
                    <p className='text-white  '>10</p>
                  </IconButton>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement className='vertical-timeline-element--education arrowright' />
              <VerticalTimelineElement
                className='vertical-timeline-element--education--10'
                icon={<ArrowLeftIcon />}
                contentArrowStyle={{
                  borderRight: '15px solid  #0b0e12'
                }}
                contentStyle={{ background: '#0b0e12', color: '#fff' }}
              >
                <h4 className='vertical-timeline-element-title d-flex align-items-center text-white'>
                  <div className='mr-2'>
                    <img
                      className='avatar rounded-circle'
                      alt='Image placeholder'
                      src={user}
                    />
                  </div>
                  Kate upton
                </h4>
                <h6 className='vertical-timeline-element-subtitle ml-5  font-weight-normal'>
                  Yesterday 10:10 am
                </h6>
                <img
                  className='modelimg mt-3'
                  alt='Image placeholder'
                  src={ModelImage}
                  style={{ height: '400px' }}
                />

                <div className='d-flex text-align-center '>
                  <IconButton color='secondary' aria-label='like'>
                    <FavoriteBorderIcon className='mt-3 mr-1' />
                    <p className='text-white  '>101</p>
                  </IconButton>
                  <IconButton color='secondary' aria-label='comment'>
                    <ChatBubbleOutlineIcon className='mt-3 mr-1' />
                    <p className='text-white  '>20</p>
                  </IconButton>
                  <IconButton color='secondary' aria-label='comment'>
                    <BookmarkBorderIcon className='mt-3 mr-1' />
                    <p className='text-white  '>10</p>
                  </IconButton>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  )
}
export default Dashboard

