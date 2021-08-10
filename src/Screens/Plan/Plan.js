import React, { useState } from 'react'

import './Plan.css'
import Navbar from '../../Components/Navbar/Navbar'
import Button from './UI/Button'
import Card from './UI/Card'
import ColumnSection from './UI/ColumnSection'
import Footer from './UI/Footer'

const Service = (props) => {
  const [changeCard2Data, setChangeCard2Data] = useState('$10')
  const [changeCard3Data, setChangeCard3Data] = useState('$20')

  const QuaterlyHandler = () => {
    setChangeCard2Data('$8')
    setChangeCard3Data('$17')
    console.log('clicked')
  }
  const halfYearlyHandler = () => {
    setChangeCard2Data('$5')
    setChangeCard3Data('$15')
    console.log('clicked')
  }
  const YearlyHandler = () => {
    setChangeCard2Data('$4')
    setChangeCard3Data('$12')
  }
  return (
    <>
      <Navbar />
      <div className='container sectionbg'>
        <h1 className='font1 text-white text-center py-5 '>
          {' '}
          Lorem Ipsum Dollar Sit Ammet
        </h1>
        <Button onQuaterly={QuaterlyHandler} onHalfYearly={halfYearlyHandler} onYearly={YearlyHandler} />
        <div className='row mt-5'>
          <div className='col-md-4 col-12 pb-sm-4'>
            <Card type='BASIC' pic1='./Images/pic1.png' price='Free' />
          </div>
          <div className='col-md-4 col-12 pb-sm-4'>
            <Card
              type='PRIMIUM'
              pic1='./Images/pic.png'
              price={changeCard2Data}
            />
          </div>
          <div className='col-md-4 col-12 pb-sm-4'>
            <Card
              type='VVIP'
              pic1='./Images/pic3.png'
              price={changeCard3Data}
            />
          </div>
        </div>
        <ColumnSection />
        <Footer />
      </div>
    </>
  )
}
export default Service
