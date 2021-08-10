import React, { useState } from "react";
import "./Login.css";
import imgs from "../../assets/Vector.svg";
import { NavLink, Link, useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import * as Yup from "yup";
import { doPasswordReset } from "../../firebase/auth";
const ForgotPassword = () => {
  const history = useHistory();
  const [emailentered, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [className, setMsgClass] = useState("error-text");

 

  const emailEventHandler = (event) => {
    setErrorText("");
    setEmail(event.target.value);
  };

  let emailCheckSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .required("Email is required"),
    
  });

  const forgetPass = (event) => {
    setLoading(true);
    event.preventDefault();
    emailCheckSchema
      .validate({ email: emailentered})
      .then(function (value) {
        setErrorText("");
        doPasswordReset(emailentered,(data)=>{
          console.log(data);
          setLoading(false);
          setMsgClass('success-text');
          setErrorText('Kindly check your email for reset password url .');  
        })

      })
      .catch(function (err) {
        setErrorText(err.errors[0]);
        setLoading(false);
      });
  };


  return (
    <>
      <div id="login-page">
        <div className="container">
          <div className="middle-section ">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 first-section">
                <img src={imgs} alt="logo" className="img-fluid  mr-3" />
                <span className="logo-titles">
                  <b>ModalWorld</b>
                </span>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="login-form cardBorder">
                  <form
                    onSubmit={forgetPass}
                    className="px-5 mx-5 formsbmt"
                  >
                    <h1 className="login_title text-center mb-2">
                      Forgot Password
                    </h1>

                    <div className="mb-3 ">
                      <input
                        onChange={emailEventHandler}
                        value={emailentered}
                        className="form-control entremail"
                        type="text"
                        placeholder="Enter Email Address"
                      />
                    </div>

                    {errorText != "" ? (
                      <p className={className}>{errorText}</p>
                    ) : null}

                    <div class="mb-3 mx-5 mt-5 text-center">
                      {isLoading && (
                        <CircularProgress
                          size={24}
                          style={{ color: "yellow" }}
                        />
                      )}
                      <button
                        type="submit"
                        className="btn btn-block text-center pink-bg signup-button signbtn"
                      >
                        <b>Submit</b>
                      </button>
                    </div>
                    <div className='sign-up text-center'>
                      Do You Have An Account?
                      <NavLink
                        to='/login'
                        className='links d-inline-block text-decoration-none'
                      >
                        <b>Login</b>
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
  );
};
export default ForgotPassword;
