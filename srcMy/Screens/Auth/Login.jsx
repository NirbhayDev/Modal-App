import React, { useState } from 'react';
import './Login.css';
import imgs from '../../assets/Vector.svg';
import { NavLink, Link, useHistory} from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import * as Yup from 'yup';
import { doSignInWithEmailAndPassword, authByGmail} from "../../firebase/auth";
const Login = () => {

  const history=useHistory();
  const [emailentered, setEmail] = useState('')
  const [passwordentered, setPassword] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [errorText,setErrorText]=useState('');

  const emailEventHandler = (event) => {
    setErrorText('');
    setEmail(event.target.value)
  };
  const passwordEventHandler = (event) => {
    setErrorText('');
    setPassword(event.target.value)};

  let  loginCheckSchema=Yup.object().shape({
    email: Yup.string().email('Must be a valid email').required('Email is required'),
    password:  Yup.string().required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  })
  
  const submithandller = (event) => {
    setLoading(true);
    event.preventDefault()
    loginCheckSchema.validate({ email: emailentered,
      password: passwordentered}).then(function (value) {
        setLoading(false);
        setErrorText('');
        doSignInWithEmailAndPassword(emailentered,passwordentered,(loginVal)=>{
          if(loginVal.type=='success')
          {
            setEmail('');
            setPassword('');  
            history.push('/modals')         }
          else
          {
            setErrorText(loginVal.data);

          }
        })
     console.log(value)
    }).catch(function (err) {
     setErrorText(err.errors[0]);
     setLoading(false);

    });
    
  };

  //Google Signup
  const googleAuth= (event,authType)=>{
    event.preventDefault()

    setErrorText('');
    authByGmail(authType,'Model',(result)=>{
      console.log('Get Result');
      console.log(result);
      if(result.userID!="")
      {
        history.push('/modals');         
      }
      else{
        setErrorText(result.message);
 
      }
    })
   
  }

  return (
    <>
      <div id='login-page'>
        <div className='container'>
          <div className='middle-section '>
            <div className='row'>
              <div className='col-md-6 col-sm-12 first-section'>
                <img src={imgs} alt='logo' className='img-fluid  mr-3' />
                <span className='logo-titles'>
                  <b>ModalWorld</b>
                </span>
              </div>
              <div className='col-md-6 col-sm-12'>
                <div className='login-form cardBorder'>
                  <form onSubmit={submithandller} className="px-5 mx-5">
                    <h1 className='login_title text-center'>WELCOME</h1>
                    <p className='login-subtitle text-center pb-4'>Login to your account</p>
                    <div className="mb-3">
                      <input
                        onChange={emailEventHandler}
                        value={emailentered}
                        className='form-control'
                        type='text'
                        placeholder='Email Address'
                      />
                    </div>
                    <div className='pb-3'>
                      <input
                        onChange={passwordEventHandler}
                        value={passwordentered}
                        className='form-control'
                        type='password'
                        placeholder='Password'
                      />
                    </div>
                    {errorText!=""?<p className='error-text'>{errorText}</p>:null}

                    <NavLink to='/forgot-password' className='links d-inline-block text-decoration-none'>
                     Forgot Password?
                    </NavLink>
                    <div class='mb-3 mx-5 mt-5 text-center'>
                    {isLoading && <CircularProgress size={24} style={{'color': 'yellow'}}/>}
                      <button
                        type='submit'
                        className='btn btn-block text-center pink-bg signup-button'
                      >
                        <b>LOGIN</b>
                      </button>
                    </div>

                    <h4 className='or pb-2 text-center pink'>
                      <b>or</b>
                    </h4>
                    
                    <div class='mb-3 mx-5'>
                      <button className='second-button btn btn-block mb-2 ' onClick={(event)=>{googleAuth(event,'login')}}>
                        <img src={require('../../assets/google.png').default} className='btn-icon mr-2' />
                        <span>Continue with google</span>
                      </button>
                      {/* <button className='second-button btn  btn-block mb-2 '>
                        <img src={require('../../assets/google.png')} className='btn-icon mr-2' />
                        <span>Continue with Linkedin</span>
                      </button>
                      <button className='second-button btn  btn-block mb-2 '>
                        <img src={require('../../assets/google.png')} className='btn-icon mr-2' />
                        <span>Continue with Instagram</span>
                      </button> */}
                    </div>

                    <div className='sign-up text-center'>
                      Don't Have An Account?
                      <NavLink
                        to='/sign'
                        className='links d-inline-block text-decoration-none'
                      >
                        <b>Sign Up</b>
                      </NavLink>
                      here
                    </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default Login
