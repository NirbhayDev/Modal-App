import React, { useState } from "react";
import "./Support.css";
import { CircularProgress, IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

import Navbar from "../../../Components/Navbar/Navbar";
import SideNavbar from "../../../Components/SideNavbar/SideNavbar";

import UserImg from "../../../assets/kate-bigImg.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const Support = (props) => {
  const [isPhotographer, setisPhotographer] = useState(false);
  return (
    <>
      <Navbar />
      <SideNavbar />
      <div className="container sectionbg editProfile mt-5">
        <form>
          <h3 className="text-white text-center py-3">Call & Support</h3>

          

          <div class="  mt-5">
            <div>
                 <div className="d-flex "><PhoneIcon /> <h4 className="ml-2">Phone : 123456789</h4></div>
                


              
            </div>
         
            
          </div>
          <div class="  mt-4">
            <div>
                 <div className="d-flex "><MailIcon /> <h4 className="ml-2">E-mail : xyz@mail.com</h4></div>
               
            </div>
         
          </div>
          <div class="mt-4">
            <div>
                 <div><h4 >Contact us:</h4></div>
               
            </div>
         
          </div>
           <div class="  mt-4">
            <div className="d-flex">
            <div className="mt-3 mr-4 ml-2"><h4 >Name</h4>
            </div>
                 <div class="input-group mb-3">
                 <input type="text" class="form-control input-boxes" type="text" />
                 
               </div>
              
            </div>
         
            
          </div>
          <div class="  mt-4">
            <div className="d-flex">
            <div className="mt-3 mr-2"><h4 >Massage</h4>
            </div>
                 <div class="input-group mb-3">
                 <input type="text" class="form-control input-boxes" type="text" />
                 
               </div>
              
            </div>
             </div>
          
          <div class="mb-4 text-center mt-5">
            <button
              type="submit"
              className="btn text-center pink-bg signup-button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Support;
