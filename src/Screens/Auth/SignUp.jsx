import React, { useState, useEffect } from 'react'
import './Form.css'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { CircularProgress } from '@material-ui/core'
import * as Yup from 'yup'
import { doCreateUserWithEmailAndPassword, authByGmail } from '../../firebase/auth'
import { addDocument } from '../../firebase/firestore/saveData'

const SignUp = () => {
  const history = useHistory()
  const location = useLocation()
  console.log(location.userProps)
  const [emailEntered, setEmailEntered] = useState('')

  const [passwordEntered, setPasswordEntered] = useState('')

  const [nameEntered, setNameEntered] = useState('')

  const [isLoading, setLoading] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [userType, setUserType] = useState('')
  const [bgClass, setbgClass] = useState('photographerbg')

  if (location.userProp) {
    localStorage.setItem('userType', location.userProps.userType)
  }

  useEffect(() => {
    const userTypeVal = location.userProps ? location.userProps.userType : localStorage.getItem('userType')
    if (userTypeVal == 'photographer') {
      setbgClass('photographerbg')
    } else {
      setbgClass('')
    }
  }, [])

  const emailchangeHandler = (event) => {
    setEmailEntered(event.target.value)
  }
  const passwordchangeHandler = (event) => {
    setPasswordEntered(event.target.value)
  }
  const namechangeHandler = (event) => {
    setNameEntered(event.target.value)
  }

  const signupCheckSchema = Yup.object().shape({

    name: Yup.string().required('Please enter name'),
    password: Yup.string().required('Please Enter your password')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
      ),
    email: Yup.string().email('Must be a valid email').required('Email is required')
  })

  const submitHandler = (event) => {
    setLoading(true)
    event.preventDefault()
    signupCheckSchema.validate({
      email: emailEntered,
      password: passwordEntered,
      name: nameEntered
    }).then(function (value) {
      setErrorText('')
      doCreateUserWithEmailAndPassword(emailEntered, passwordEntered, (signUpVal) => {
        if (signUpVal.type == 'success') {
          const ModelData = {
            user_name: nameEntered,
            email: emailEntered,
            user_type: 'Model',
            created_at: new Date(),
            about_us: '',
            address: '',
            city: '',
            contact_no: '',
            country: '',
            date_of_birth: '',
            generes: ['Acting', 'Fashion', 'Modeling'],
            profile_photo: '',
            marital_status: 'Single',
            zipcode: '',
            other_details: [{}]
          }
          
        addDocument('users', signUpVal.data, ModelData, res => {
          let userInfo={
            user_name: nameEntered,
            email: emailEntered,
          }
          localStorage.setItem('userInfo',JSON.stringify(userInfo));
          console.log(res)
          })

          setEmailEntered('')
          setPasswordEntered('')
          setNameEntered('')
          setLoading(false)

          history.push('/create-profile')
        } else {
          setErrorText(signUpVal.data)
          setLoading(false)
        }
      })
      console.log(value)
    }).catch(function (err) {
      setErrorText(err.errors[0])
      setLoading(false)
    })
  }

  // Google Signup
  const googleAuth = (authType) => {
    authByGmail(authType, 'Model', (result) => {
      console.log('Get Result')
      console.log(result)
      if (result.userID != '') {
        history.push('/create-profile')
      }
    })
  }
  console.log('setclass')
  console.log(bgClass)
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

            <div className='row align-content-center'>
              <div className='col-md-4 col-lg-8' />

              <div className='col-md-8 col-lg-4 col-sm-12'>

                <div className='main_container white-bg'>

                  <form className='signup-form' onSubmit={submitHandler}>
                    <h3 className='title py-3'>SignUp</h3>

                    <div class='mb-3'>
                      <label htmlFor='className' class='form-label'>Email</label>
                      <input
                        className='form-control input-boxes'
                        type='text'
                        onChange={emailchangeHandler}
                        value={emailEntered}
                      />

                    </div>

                    <div class='mb-3'>
                      <label htmlFor='password' class='form-label'>Password</label>

                      <input
                        className='form-control input-boxes'
                        type='password'
                        onChange={passwordchangeHandler}
                        value={passwordEntered}
                      />

                    </div>

                    <div class='mb-3'>
                      <label htmlFor='name' class='form-label'>Full Name</label>
                      <input
                        className='form-control input-boxes'
                        type='text'
                        onChange={namechangeHandler}
                        value={nameEntered}
                      />

                    </div>

                    <div class='mb-3 text-center'>
                      {isLoading && <CircularProgress size={24} style={{ color: 'black' }} />}
                      {errorText != '' ? <p className='error-text'>{errorText}</p> : null}

                      <button
                        type='submit'
                        className='btn btn-block text-center pink-bg signup-button'
                      >

                        <b>SIGNUP</b>
                      </button>
                    </div>

                    <h4 className='or pb-2 text-center pink'>
                      <b>or</b>
                    </h4>
                  </form>
                  <div class='mb-3'>
                    <button className='second-button btn  btn-block mb-2' onClick={() => { googleAuth('register') }}>
                      <img src={require('../../assets/google.png').default} className='btn-icon mr-2' />
                          Continue with google
                    </button>
                  </div>

                  <p className='signup-now text-center pb-2'>
                    <b>Already have an Account?</b>
                    <NavLink
                      to='/login'
                      className='pink d-inline-block text-decoration-none ml-2'
                    >
                      <b>Login</b>
                    </NavLink>
                  </p>

                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
export default SignUp
