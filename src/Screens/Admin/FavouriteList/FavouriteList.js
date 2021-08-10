import React, { useState } from "react";
import "./FavouriteList.css";
import { CircularProgress, IconButton } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";

import Navbar from "../../../Components/Navbar/Navbar";
import SideNavbar from "../../../Components/SideNavbar/SideNavbar";

import UserImg from "../../../assets/modal_bg.png";

const Support = (props) => {
  const [isPhotographer, setisPhotographer] = useState(false);
  const data = [1,2,3,4,5,6,7,8,]
  return (
    <>
      <Navbar />
      <SideNavbar />
      <div className="container sectionbg mt-5">
        <h3 className="text-white text-center py-3">Favourite List</h3>
        <div className="mt-5">
          <div className="row">
            {data.map((item)=>
            <div className="col-sm-6 col-md-4 mb-4">
              <div className="card">
                <img src={UserImg} className="card-img-top" alt="..." />
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <p className="favoItemName">Nichekita</p>
                    <p className="favoItemName pink">26 yrs</p>
                  </div>
                  <IconButton aria-label="delete">
                    <DeleteOutline />
                  </IconButton>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Support;
