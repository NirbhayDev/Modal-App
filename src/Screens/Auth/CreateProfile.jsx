import React, { useState, useEffect } from 'react'
import ChipInput from 'material-ui-chip-input'

import './Form.css'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { CircularProgress, IconButton } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'

import * as Yup from 'yup'
import { updateProfile } from '../../firebase/firestore/updateData'
import logo from '../../assets/logo.png'
import UserImg from '../../assets/kate-bigImg.png'
import { storage } from '../../firebase/firebase'
import { uploadMedia } from '../../firebase/storage'
import ProgressBar from 'react-bootstrap/ProgressBar'
const CreateProfile = () => {
  const history = useHistory()
  const location = useLocation()
  console.log(location.userProps)
  const [imgEntered, setImgEntered] = useState('')
  const [fnameEntered, setFnameEntered] = useState('')
  const [lnameEntered, setLnameEntered] = useState('')
  const [phoneEntered, setPhoneEntered] = useState('')
  const [dobEntered, setDobEntered] = useState('')
  const [aboutEntered, setAboutEntered] = useState('')
  const [informationEntered, setInformationEntered] = useState('')
  const [expYearEntered, setexpYearEntered] = useState('')
  const [expMonthEntered, setexpMonthEntered] = useState('')

  const [imgUrl, setimgUrl] = useState('')
  const [imgUrlFirebase, setimgUrlFirebase] = useState('')

  const [tansferedData, setTransferred] = useState(0)

  const [isLoading, setLoading] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [userType, setUserType] = useState('')
  const [bgClass, setbgClass] = useState('photographerbg')
  const [yourChips, setyourChips] = useState([])
  const [monthList, setMonthList] = useState([])
  const [yearList, setYearList] = useState([])

  if (location.userProp) {
    localStorage.setItem('userType', location.userProps.userType)
  }

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo')
    console.log(userInfo)
    if (userInfo != null) {
      const userData = JSON.parse(userInfo)
      const usernameArray = userData.user_name.split(' ')
      setFnameEntered(usernameArray[0])
      setLnameEntered(usernameArray[1])
    }

    const userTypeVal = location.userProps ? location.userProps.userType : localStorage.getItem('userType')
    if (userTypeVal == 'photographer') {
      setbgClass('photographerbg')
    } else {
      setbgClass('')
    }

    getMonthandYearList()
  }, [])

  const getMonthandYearList = () => {
    const monthArray = []
    const yearArray = []
    for (let i = 1; i <= 12; i++) {
      monthArray.push(i)
    }
    setMonthList(monthArray)
    for (let i = 1; i <= 20; i++) {
      yearArray.push(i)
    }
    setYearList(yearArray)
  }

  async function uploadToFirebase (file) {
    const userID = await localStorage.getItem('userID')
    console.log(file)
    const result = await uploadMedia(
      file,
      userID,
      `users/${userID}/profile_picture/`,
      progress => {
        console.log(progress)
        setTransferred(progress)
      },
      error => {
        console.log('====================================')
        console.log(error)
        console.log('====================================')
      },
      url => {
        setimgUrlFirebase(url)
      }
    )
  }

  const imgchangeHandler = (event) => {
    var imageUrl = URL.createObjectURL(event.target.files[0])
    console.log(imageUrl)
    setimgUrl(imageUrl)
    // uploadImage(event.target.files[0]);
    uploadToFirebase(event.target.files[0])
  }

  const fnamechangeHandler = (event) => {
    setFnameEntered(event.target.value)
  }
  const lnamechangeHandler = (event) => {
    setLnameEntered(event.target.value)
  }
  const phonechangeHandler = (event) => {
    setPhoneEntered(event.target.value)
  }
  const dobchangeHandler = (event) => {
    setDobEntered(event.target.value)
  }
  const aboutchangeHandler = (event) => {
    setAboutEntered(event.target.value)
  }
  const informationchangeHandler = (event) => {
    setInformationEntered(event.target.value)
  }

  const expYearchangeHandler = (event) => {
    setexpYearEntered(event.target.value)
  }

  const expMonthchangeHandler = (event) => {
    setexpMonthEntered(event.target.value)
  }
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const createProfileCheckSchema = Yup.object().shape({
    about_us: Yup.string().required('Please enter About'),
    contact_no: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
  })

  const submitHandler = (event) => {
    setLoading(true)
    event.preventDefault()
    const userID = localStorage.getItem('userID')
    createProfileCheckSchema.validate({
      contact_no: phoneEntered,
      date_of_birth: dobEntered,
      about_us: aboutEntered,
      information: informationEntered,
      expyear: expYearEntered,
      expmonth: expMonthEntered
    }).then(function (value) {
      setErrorText('')
      const userName = fnameEntered + ' ' + lnameEntered
      const profileObj = {
        user_name: userName,
        about_us: aboutEntered,
        contact_no: phoneEntered,
        date_of_birth: dobEntered,
        profile_photo: imgUrlFirebase,
        additional_info: informationEntered,
        exp_year: expYearEntered,
        exp_month: expMonthEntered,
        generes: yourChips
      }

      updateProfile('users', userID, profileObj, (profileVal) => {
        if (profileVal) {
          setLoading(false)
          history.push('/modals')
        } else {
          setErrorText(profileVal.data)
          setLoading(false)
        }
      })
      console.log(value)
    }).catch(function (err) {
      setErrorText(err.errors)
      setLoading(false)
    })
  }

  const handleAddChip = (chips) => {
    setyourChips(chips)
  }

  const handleDeleteChip = (chip, index) => {
    let chipArray = yourChips
    chipArray = chipArray.splice(index, 1)

    setyourChips(chipArray)
  }

  console.log('setclass')
  console.log(fnameEntered)

  return (
    <>
      <div className={`sign ${bgClass}`} id='sign-up'>
        <div className='container'>
          <div className='py-3 wrap'>
            <div className='container'>
              <nav className='navbar navbar-expand-lg navbar-light'>
                <div className='container-fluid'>
                  <NavLink className='navbar-brand' to='/'>
                    <img src={logo} className='img-fluid' alt='logo' />
                  </NavLink>
                </div>
              </nav>
            </div>
          </div>
          <section className='signSection'>

            <div className='row align-content-center justify-content-center'>
              <div className='col-md-8 col-sm-12'>

                <div className='main_container white-bg'>

                  <form className='signup-form' onSubmit={submitHandler}>
                    <h3 className='title py-3'>Create Profile</h3>

                    <div class='row mb-3 justify-content-center'>
                      <div className='col-md-4 col-sm-6 text-center'>
                        <div className='userImgUp'>
                          <img src={imgUrl != '' ? imgUrl : UserImg} className='img-fluid' alt='Profile Image' />
                          <input
                            accept='image/*' className='d-none' id='icon-button-file' type='file'
                            onChange={imgchangeHandler}
                            value={imgEntered}
                          />
                          <label htmlFor='icon-button-file'>
                            <IconButton color='primary' aria-label='upload picture' component='span'>
                              <PhotoCamera />
                            </IconButton>
                          </label>
                          {tansferedData > 0 && tansferedData < 100 ? <ProgressBar animated now={tansferedData} /> : null}
                        </div>
                      </div>
                    </div>

                    <div class='row mb-3'>
                      <div className='col-md-6'>
                        <label htmlFor='className' class='form-label'>First Name</label>
                        <input
                          className='form-control input-boxes'
                          type='text'
                          onChange={fnamechangeHandler}
                          value={fnameEntered}
                        />
                      </div>
                      <div className='col-md-6'>
                        <label htmlFor='className' class='form-label'>Last Name</label>
                        <input
                          className='form-control input-boxes'
                          type='text'
                          onChange={lnamechangeHandler}
                          value={lnameEntered}
                        />
                      </div>
                    </div>

                    <div class='row mb-3'>
                      <div className='col-md-6'>
                        <label htmlFor='className' class='form-label'>Phone</label>
                        <input
                          className='form-control input-boxes'
                          type='text'
                          onChange={phonechangeHandler}
                          value={phoneEntered}
                        />
                      </div>
                    </div>

                    <div class='row mb-3'>

                      <div className='col-md-6'>
                        <label htmlFor='className' class='form-label'>Generas</label>

                        <div className='form-control input-boxes chipInput'>
                          <ChipInput
                          disableUnderline={true}
                            defaultValue={yourChips}
                            onChange={(chips) => handleAddChip(chips)}
                          />
                        </div>

                      </div>
                      <div className='col-md-6'>
                        <label htmlFor='className' class='form-label'>Date of Birth</label>
                        <input
                          className='form-control input-boxes'
                          type='date'
                          onChange={dobchangeHandler}
                          value={dobEntered}
                        />
                      </div>
                    </div>

                    <div class='mb-3'>
                      <label htmlFor='password' class='form-label'>About Me</label>
                      <textarea
                        className='form-control input-boxes textarea'
                        onChange={aboutchangeHandler}
                        value={aboutEntered}
                      />
                    </div>

                    <div class='mb-3'>
                      <label htmlFor='password' class='form-label'>Additional Information</label>
                      <textarea
                        className='form-control input-boxes textarea' onChange={informationchangeHandler}
                        value={informationEntered}
                      />
                    </div>

                    <div class='row mb-3'>
                      <div className='col-md-6'>
                        <label htmlFor='className' class='form-label'>Total Experience</label>
                        <select
                          className='form-control input-boxes' onChange={expYearchangeHandler}
                          value={expYearEntered}
                        >
                          <option>Years</option>
                          {yearList.length > 0 && yearList.map((year) => {
                            return (<option>{year}</option>)
                          })}
                        </select>
                      </div>
                      <div className='col-md-6'>
                        <label htmlFor='className' class='form-label'>&nbsp;</label>
                        <select
                          className='form-control input-boxes' onChange={expMonthchangeHandler}
                          value={expMonthEntered}
                        >
                          <option>Months</option>
                          {monthList.length > 0 && monthList.map((month) => {
                            return (<option>{month}</option>)
                          })}

                        </select>
                      </div>
                    </div>

                    <div class='mb-3 text-center'>
                      {isLoading && <CircularProgress size={24} style={{ color: 'black' }} />}
                      {errorText != '' ? <p className='error-text'>{errorText}</p> : null}

                      <button
                        type='submit'
                        className='btn btn-block text-center pink-bg signup-button'
                      >

                        <b>Save</b>
                      </button>
                    </div>

                  </form>

                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
export default CreateProfile
