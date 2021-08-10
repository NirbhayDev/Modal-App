import React, { useState, useEffect } from 'react'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { Country, State, City } from 'country-state-city'

import './EditProfile.css'
import { CircularProgress, IconButton } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import Navbar from '../../../Components/Navbar/Navbar'
import SideNavbar from '../../../Components/SideNavbar/SideNavbar'
import UserImg from '../../../assets/kate-bigImg.png'

import * as Yup from 'yup'
import { updateProfile } from '../../../firebase/firestore/updateData'
import { uploadMedia } from '../../../firebase/storage'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { getDocumentById } from '../../../firebase/firestore/getData'

const EditProfile = (props) => {
  const history = useHistory()
  const location = useLocation()

  const [isPhotographer, setisPhotographer] = useState(false)
  const [imgEntered, setImgEntered] = useState('')
  const [fnameEntered, setFnameEntered] = useState('')
  const [lnameEntered, setLnameEntered] = useState('')
  const [phoneEntered, setPhoneEntered] = useState('')
  const [dobEntered, setDobEntered] = useState('')
  const [aboutEntered, setAboutEntered] = useState('')
  const [emailEntered, setemailEntered] = useState('')
  const [addressEntered, setaddressEntered] = useState('')
  const [cityEntered, setcityEntered] = useState('')
  const [cityCode, setCityCode] = useState('')

  const [stateEntered, setstateEntered] = useState('')
  const [stateCode, setStateCode] = useState('')

  const [zipEntered, setzipEntered] = useState('')
  const [countryCode, setcountryCodeEntered] = useState('')
  const [countryEntered, setcountryEntered] = useState('')
  const [profileheadEntered, setprofileheadEntered] = useState('')
  const [relationEntered, setrelationEntered] = useState('')
  const [childrenEntered, setchildrenEntered] = useState('')
  const [professionEntered, setprofessionEntered] = useState('')
  const [educateEntered, seteducateEntered] = useState('')
  const [languageEntered, setlanguageEntered] = useState('')
  const [heightEntered, setheightEntered] = useState('')
  const [weightEntered, setweightEntered] = useState('')
  const [bodyEntered, setbodyEntered] = useState('')
  const [statusEntered, setstatusEntered] = useState('')
  const [hairEntered, sethairEntered] = useState('')
  const [eyeEntered, seteyeEntered] = useState('')

  const [imgUrl, setimgUrl] = useState('')
  const [imgUrlFirebase, setimgUrlFirebase] = useState('')

  const [tansferedData, setTransferred] = useState(0)

  const [isLoading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('')
  const [userType, setUserType] = useState('')
  const [bgClass, setbgClass] = useState('photographerbg')
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    const userID = localStorage.getItem('userID')
    if (userID) {
      getDocumentById('users', userID, (data) => {
        if (data) {
          console.log(data)
          const usernameArray = data.user_name.split(' ')
          setFnameEntered(usernameArray[0])
          setLnameEntered(usernameArray[1])
          setPhoneEntered(data.contact_no?data.contact_no:'')
          setDobEntered(data.date_of_birth?data.date_of_birth:'')
          setAboutEntered(data.about_us?data.about_us:'')
          setemailEntered(data.email?data.email:'')
          setaddressEntered(data.address?data.address:'')
          setcityEntered(data.city?data.city:'')
          setstateEntered(data.state?data.state:'')
          setzipEntered(data.zipcode?data.zipcode:'')
          setcountryEntered(data.country?data.country:'')
          setprofileheadEntered(data.profilehead?data.profilehead:'')
          setrelationEntered(data.marital_status?data.marital_status:'')
          setchildrenEntered(data.other_details.children?data.other_details.children:'')
          setprofessionEntered(data.generes?data.generes:[])
          seteducateEntered(data.other_details.education?data.other_details.education:'')
          setlanguageEntered(data.other_details.language?data.other_details.language:'')
          setheightEntered(data.other_details.height?data.other_details.height:'')
          setweightEntered(data.other_details.weight?data.other_details.weight:'')
          setbodyEntered(data.other_details.body?data.other_details.body:'')
          setstatusEntered(data.other_details.status?data.other_details.status:'')
          sethairEntered(data.other_details.hair?data.other_details.hair:'')
          seteyeEntered(data.other_details.eye?data.other_details.eye:'')
          setimgUrlFirebase(data.profile_photo);
          setimgUrl(data.profile_photo);

          console.log('image Profile');
          console.log(data);
          setUserInfo(data)
        } else {
          alert('No record found !')
        }
      })
    }

    const userTypeVal = location.userProps ? location.userProps.userType : localStorage.getItem('userType')
    if (userTypeVal == 'photographer') {
      setbgClass('photographerbg')
    } else {
      setbgClass('')
    }
  }, [])

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
        setimgUrlFirebase(url);
        setimgUrl(url);
        localStorage.setItem('profile_img',url);
        let profileObj={profile_photo: url};
        updateProfile('users', userID, profileObj, (profileVal) => {
          console.log('Updated');
        })
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
  const emailchangeHandler = (event) => {
    setemailEntered(event.target.value)
  }
  const addresschangeHandler = (event) => {
    setaddressEntered(event.target.value)
  }
  const citychangeHandler = (event) => {
    const select = event.target;
    const value = select.value;
    const desc = select.options[select.selectedIndex].text;
    setcityEntered(desc);
    setCityCode(value)
  }
  const statechangeHandler = (event) => {
    const select = event.target;
    const value = select.value;
    const desc = select.options[select.selectedIndex].text;
    
    setstateEntered(desc);
    setStateCode(value);
  }
  const zipchangeHandler = (event) => {
    setzipEntered(event.target.value)
  }
  const countrychangeHandler = (event) => {
    const select = event.target;
    const value = select.value;
    const desc = select.options[select.selectedIndex].text;
    console.log(`option desc`, desc);
    setcountryEntered(desc);
    setcountryCodeEntered(value);
  }
  const profileheadchangeHandler = (event) => {
    setprofileheadEntered(event.target.value)
  }
  const childrenchangeHandler = (event) => {
    setchildrenEntered(event.target.value)
  }
  const professionchangeHandler = (event) => {
    setprofessionEntered(event.target.value)
  }
  const educatechangeHandler = (event) => {
    seteducateEntered(event.target.value)
  }
  const languagechangeHandler = (event) => {
    setlanguageEntered(event.target.value)
  }
  const heightchangeHandler = (event) => {
    setheightEntered(event.target.value)
  }
  const weightchangeHandler = (event) => {
    setweightEntered(event.target.value)
  }
  const bodychangeHandler = (event) => {
    setbodyEntered(event.target.value)
  }
  const statuschangeHandler = (event) => {
    setstatusEntered(event.target.value)
  }
  const hairchangeHandler = (event) => {
    sethairEntered(event.target.value)
  }
  const eyechangeHandler = (event) => {
    seteyeEntered(event.target.value)
  }
  const relationchangeHandler = (event) => {
    setrelationEntered(event.target.value)
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const createProfileCheckSchema = Yup.object().shape({
    //about_us: Yup.string().required('Please enter About'),
    contact_no: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
  })

  const submitHandler = (event) => {
    setLoading(true)
    event.preventDefault()
    const userID = localStorage.getItem('userID')
    createProfileCheckSchema.validate({
      contact_no: phoneEntered,
      // date_of_birth: dobEntered,
      // about_us: aboutEntered,
      // email: aboutEntered,
      // address: aboutEntered,
      // city: aboutEntered,
      // state: aboutEntered,
      // zipcode: aboutEntered,
      // country: aboutEntered,
      // profilehead: aboutEntered,
      // marital_status: aboutEntered,
      // generes: aboutEntered,

    }).then(function (value) {
      setErrorText('')
      const userName = fnameEntered + ' ' + lnameEntered
      const otherDetails = { children: childrenEntered, education: educateEntered, language: languageEntered, height: heightEntered, weight: weightEntered, body: bodyEntered, status: statusEntered, hair: hairEntered, eye: eyeEntered }
      
      
      const profileObj = {
        user_name: userName,
        contact_no: phoneEntered,
        date_of_birth: dobEntered,
        about_us: aboutEntered,
        email: emailEntered,
        address: addressEntered,
        city: cityEntered,
        state: stateEntered,
        zipcode: zipEntered,
        country: countryEntered,
        profilehead: profileheadEntered,
        marital_status: relationEntered,
        generes: professionEntered,
        other_details: otherDetails
      }
        updateProfile('users', userID, profileObj, (profileVal) => {
        if (profileVal) {
          console.log(profileVal)
          setLoading(false)
          // history.push('/modals')
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
console.log('get state country');
console.log(countryCode,stateCode);
  return (
    <>
      <Navbar />
      <SideNavbar />
      <div className='container sectionbg editProfile mt-5'>
        <form className='signup-form' onSubmit={submitHandler}>
          <h4 className='text-white py-3'>Edit Profile</h4>

          <div class='row mb-4 justify-content-center'>
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
                    <Edit />
                  </IconButton>
                </label>
                {tansferedData > 0 && tansferedData < 100 ? <ProgressBar animated now={tansferedData} /> : null}
              </div>
            </div>
          </div>

          <div class='row mb-4 mt-5'>
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

          <div class='row mb-4'>
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

          <div class='row mb-4'>
            <div className='col-md-6'>
              <label htmlFor='className' class='form-label'>Email</label>
              <input
                className='form-control input-boxes'
                type='text'
                onChange={emailchangeHandler}
                value={emailEntered}
              />
            </div>
            <div className='col-md-6'>
              <label htmlFor='className' class='form-label'>Contact Number</label>
              <input
                className='form-control input-boxes'
                type='text'
                onChange={phonechangeHandler}
                value={phoneEntered}
              />
            </div>
          </div>

          <div class='mb-4'>
            <label htmlFor='address' class='form-label'>Address</label>
            <input
              className='form-control input-boxes'
              type='text'
              onChange={addresschangeHandler}
              value={addressEntered}
            />
          </div>

          <div class='row mb-4'>
            <div className='col-md-6'>
              <label htmlFor='className' class='form-label'>Country</label>
              <select
                className='form-control input-boxes'
                onChange={countrychangeHandler}
                value={countryCode}
              >
                <option value="">Country</option>
                {Country.getAllCountries().map((item) => {
                  return (<option value={item.isoCode}>{item.name}</option>)
                })}
              </select>
            </div>

            <div className='col-md-6'>
              <label htmlFor='className' class='form-label'>State</label>
              <select
                className='form-control input-boxes'
                onChange={statechangeHandler}
                value={stateCode}
              >
                <option value="">State</option>
                {State.getStatesOfCountry(countryCode).map((item) => {
                  return (<option value={item.isoCode}>{item.name}</option>)
                })}
              </select>
            </div>
          </div>

          <div class='row mb-4'>
            <div className='col-md-6'>
              <label htmlFor='className' class='form-label'>City</label>
              <select
                className='form-control input-boxes'
                onChange={citychangeHandler}
                value={cityEntered}
              >
                <option>City</option>
                {City.getCitiesOfState(countryCode,stateCode).map((item) => {
                  return (<option>{item.name}</option>)
                })}
              </select>
            </div>

            <div className='col-md-6'>
              <label htmlFor='className' class='form-label'>ZIP code</label>
              <input
                className='form-control input-boxes'
                type='text'
                onChange={zipchangeHandler}
                value={zipEntered}
              />
            </div>
          </div>

          <hr />

          <div class='row mb-4'>
            <div className='col-md-12'>
              <label htmlFor='className' class='form-label'>Profile Hedline</label>
              <input
                className='form-control input-boxes'
                type='text'
                onChange={profileheadchangeHandler}
                value={profileheadEntered}
              />
            </div>
          </div>

          <div class='mb-4'>
            <label htmlFor='password' class='form-label'>About Yourself</label>
            <textarea
              className='form-control input-boxes'
              onChange={aboutchangeHandler}
              value={aboutEntered}
            />
          </div>

          <div class='row mb-4'>
            <div className='col-md-6'>
              <label htmlFor='className' class='form-label'>Relationship Status</label>
              <select
                className='form-control input-boxes'
                onChange={relationchangeHandler}
                value={relationEntered}
              >
                <option>Select Relationship</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorce</option>
              </select>
            </div>
            <div className='col-md-6'>
              <label htmlFor='className' class='form-label'>Children</label>
              <input
                className='form-control input-boxes'
                type='text'
                onChange={childrenchangeHandler}
                value={childrenEntered}
              />
            </div>
          </div>

          <div class='row mb-4'>
            <div className='col-md-6'>
              <label htmlFor='className' class='form-label'>Profession</label>
              <input
                className='form-control input-boxes'
                type='text'
                onChange={professionchangeHandler}
                value={professionEntered}
              />
            </div>
            <div className='col-md-6'>
              <label htmlFor='className' class='form-label'>Education</label>
              <input
                className='form-control input-boxes'
                type='text'
                onChange={educatechangeHandler}
                value={educateEntered}
              />
            </div>
          </div>

          <div class='row mb-4'>
            <div className='col-md-6'>
              <label htmlFor='className' class='form-label'>Language Known</label>
              <input
                className='form-control input-boxes'
                type='text'
                onChange={languagechangeHandler}
                value={languageEntered}
              />
            </div>
          </div>

          {isPhotographer ? null
            : <>
              <hr />

              <div class='row mb-4'>
                <div className='col-md-6'>
                  <label htmlFor='className' class='form-label'>Height</label>
                  <input
                    className='form-control input-boxes'
                    type='text'
                    onChange={heightchangeHandler}
                    value={heightEntered}
                  />
                </div>
                <div className='col-md-6'>
                  <label htmlFor='className' class='form-label'>Weight</label>
                  <input
                    className='form-control input-boxes'
                    type='text'
                    onChange={weightchangeHandler}
                    value={weightEntered}
                  />
                </div>
              </div>

              <div class='row mb-4'>
                <div className='col-md-6'>
                  <label htmlFor='className' class='form-label'>Body Type</label>
                  <input
                    className='form-control input-boxes'
                    type='text'
                    onChange={bodychangeHandler}
                    value={bodyEntered}
                  />
                </div>
                <div className='col-md-6'>
                  <label htmlFor='className' class='form-label'>Status</label>
                  <input
                    className='form-control input-boxes'
                    type='text'
                    onChange={statuschangeHandler}
                    value={statusEntered}
                  />
                </div>
              </div>

              <div class='row mb-4'>
                <div className='col-md-6'>
                  <label htmlFor='className' class='form-label'>Hair</label>
                  <input
                    className='form-control input-boxes'
                    type='text'
                    onChange={hairchangeHandler}
                    value={hairEntered}
                  />
                </div>
                <div className='col-md-6'>
                  <label htmlFor='className' class='form-label'>Eye</label>
                  <input
                    className='form-control input-boxes'
                    type='text'
                    onChange={eyechangeHandler}
                    value={eyeEntered}
                  />
                </div>
              </div>
            </>}

          <div class='mb-4 text-center mt-5 '>
            {isLoading && <CircularProgress size={24} style={{ color: 'yellow' }} />}
            {errorText != '' ? <p className='error-text'>{errorText}</p> : null}
            <button
              type='submit'
              className='btn text-center pink-bg signup-button'
            >Save
            </button>
          </div>

        </form>
      </div>
    </>
  )
}
export default EditProfile
