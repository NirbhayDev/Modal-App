import React, { useState } from "react";
import "./BlockList.css";
import { CircularProgress, IconButton, Avatar } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

import Navbar from "../../../Components/Navbar/Navbar";
import SideNavbar from "../../../Components/SideNavbar/SideNavbar";

import UserImg from "../../../assets/kate-bigImg.png";

import CloseIcon from "@material-ui/icons/Close";

const Support = (props) => {
  const [isPhotographer, setisPhotographer] = useState(false);
  const data =[1,2,3,4,5,6]
  return (
    <>
      <Navbar />
      <SideNavbar />
      <div className="container sectionbg editProfile mt-5">
        <form>
          <h3 className="text-white text-center py-3">
            List of People Blocked
          </h3>

          <div className="mt-3">
            <div>
              <ul className="list-group">
                {data.map((item)=><li className="list-group-item d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center">
                    <Avatar alt="Remy Sharp" src={UserImg} className="avatarImg" />
                    <p className="favoItemName">Nechita</p>
                  </div>
                  <IconButton aria-label="delete">
                    <CloseIcon />
                  </IconButton>
                </li>
                )}
              </ul>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Support;
