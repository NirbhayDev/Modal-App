import React, { useState } from "react";
import "./SocialLinks.css";
import { CircularProgress, IconButton } from "@material-ui/core";

import Navbar from "../../../Components/Navbar/Navbar";
import SideNavbar from "../../../Components/SideNavbar/SideNavbar";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";

const SocialLinks = (props) => {
  const [isPhotographer, setisPhotographer] = useState(false);
  return (
    <>
      <Navbar />
      <SideNavbar />
      <div className="container sectionbg editProfile mt-5">
        <form>
          <h3 className="text-white text-center py-3">Social Link</h3>

          <div class="mb-4 mt-3">
            <div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control input-boxes"
                  placeholder="Facebook"
                  type="text"
                />
                <div class="input-group-append">
                  <button class="btn btnfcbk" type="button" id="button-addon2">
                    <FacebookIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control input-boxes"
                  placeholder="Twitter"
                  type="text"
                />
                <div class="input-group-append">
                  <button class="btn btnfcbk" type="button" id="button-addon2">
                    <TwitterIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control input-boxes"
                  placeholder="Pinterest"
                  type="text"
                />
                <div class="input-group-append">
                  <button class="btn btnfcbk" type="button" id="button-addon2">
                    <PinterestIcon />
                  </button>
                </div>
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
export default SocialLinks;
