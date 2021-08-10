import React, { useState } from 'react';
import './Dashboard.css';
import { CircularProgress, IconButton } from '@material-ui/core';
import {
  PeopleOutline,
  Visibility,
  ThumbUp,
  Assignment
} from '@material-ui/icons';
import LineChart from 'react-linechart';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Navbar from '../../../Components/Navbar/Navbar';
import SideNavbar from '../../../Components/SideNavbar/SideNavbar';
import MapChart from './MapChart';
import { Male, Female } from 'react-gender';
import VerticalBarGraph from '@chartiful/react-vertical-bar-graph';

const Dashboard = (props) => {
  const data = [
    {
      color: 'steelblue',

      points: [
        { x: 1, y: 2 },
        { x: 3, y: 5 },
        { x: 7, y: -3 }
      ]
    }
  ]

  const [content, setContent] = useState('')
  return (
    <>
      <Navbar />
      <SideNavbar />
      <div className='container sectionbg mt-3'>
        <div className='text-center'>
          <h4>Hi Alex! Welcome back to Dropper</h4>
          <p>Check out your page performance and status</p>
        </div>

        <div className='row'>
          <div className='col-md-3'>
            <div className='info-card'>
              <div>
                <h2>118,348</h2>
                <p>Followers</p>
              </div>
              <PeopleOutline
                className='headericn'
                style={{ fontSize: '50px' }}
              />
            </div>
          </div>

          <div className='col-md-3'>
            <div className='info-card info-card1'>
              <div>
                <h2>9803</h2>
                <p>Page View</p>
              </div>
              <Visibility className='headericn' style={{ fontSize: '50px' }} />
            </div>
          </div>

          <div className='col-md-3'>
            <div className='info-card info-card2'>
              <div>
                <h2>21809</h2>
                <p>Post Like</p>
              </div>
              <ThumbUp className='headericn' style={{ fontSize: '50px' }} />
            </div>
          </div>

          <div className='col-md-3'>
            <div className='info-card info-card3'>
              <div>
                <h2>VVIP ($20/Month)</h2>
                <p>Paln</p>
              </div>
              <Assignment className='headericn' style={{ fontSize: '50px' }} />
            </div>
          </div>
        </div>
        <div className='chart-card mt-3'>
          <div>
            <div className='chart-header'>
              <div className='d-flex '>
                <h4 className='mr-1'>Overview</h4>
                <EqualizerIcon style={{ color: 'white' }} />
              </div>
              <div className='d-flex'>
                <div className='folowrs'>
                  <CheckBoxOutlineBlankIcon className='checkboxicn' />
                  <h4>Followers</h4>
                </div>
                <div className='folowrs1 ml-5'>
                  <CheckBoxOutlineBlankIcon className='checkboxicn1' />
                  <h4>Page View</h4>
                </div>
              </div>
            </div>
            <div className='linechart'>
              <LineChart
                width={1200}
                height={400}
                data={data}
                yAxis={{
                  color: 'white'
                }}
              />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5 '>
            <div className='followed-countries-col mt-3'>
              <div className='followed-countries'>
                <div>
                  <h4>Followed by Country </h4>
                </div>
                <div>
                  <h4>Followers </h4>
                </div>
              </div>
              <div>
                <MapChart setTooltipContent={setContent} />
              </div>
            </div>
          </div>
          <div className='col-md-7'>
            <div className='followers-age mt-3'>
              <div>
                <h4>Followers by Age and Gender</h4>
              </div>
              <div className='row '>
                <div className='col-md-2 genders'>
                  <Male color='#419fcf' />

                  <Female color='#62c762' className='female' />
                </div>
                <div className='col-md-3 '>
                  <h4 className='men'>57% Men</h4>
                  <h4 className='wmn'>43% Women</h4>
                </div>
                <div className='col-md-7'>
                  <VerticalBarGraph
                    data={[20, 45, 28, 80, 99, 43, 50]}
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    width={400}
                    height={175}
                    barRadius={5}
                    barWidthPercentage={0.65}
                    baseConfig={{
                      hasXAxisBackgroundLines: false,
                      xAxisLabelStyle: {
                        position: 'right',
                        prefix: '$',
                        color: 'grey'
                      },
                      yAxisLabelStyle: {
                        color: 'grey'
                      }
                    }}
                    barColor="rgb(65, 159, 207)"
                    style={{
                      paddingVertical: 10,
                      color: 'grey '
                    }}
                  />
                  <VerticalBarGraph
                    data={[-20, -45, -28, -80, -99, -43, -50]}
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    width={400}
                    height={175}
                    barRadius={5}
                    barWidthPercentage={0.65}
                    baseConfig={{
                      hasXAxisBackgroundLines: false,
                      xAxisLabelStyle: {
                        position: 'right',
                        prefix: '$',
                        color: 'grey'
                      },
                      yAxisLabelStyle: {
                        color: 'grey'
                      }
                    }}
                    barColor="rgb(98, 199, 98)"
                    style={{
                      paddingVertical: 10,
                      color: '#fff '
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default Dashboard
