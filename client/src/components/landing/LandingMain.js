import React from "react";
import PropTypes from "prop-types";
import "./LandingMain.css";

function LandingMain(props) {
  return (
    <div className="container-fluid landing-main">
      <div className="d-flex">
        <div className="row no-gutters">
          <div
            id="landing-main-aesthetics"
            className="col-md landing-main-sections mask rgba-gradient "
          >
            <p className="landing-title">AESTHETICS ZONE</p>
          </div>
          <div id="landing-main-health" className="col-md landing-main-sections ">
            <p className="landing-title">HEALTH ZONES</p>
          </div>
        </div>
        
      </div>
      <div className="main-slogan row no-gutters">
        <div className="p-2 col-12">one stop aesthetics and health</div>
      </div>
      <div className="secondary-slogan row no-gutters">
        <div className="p-2 col-12">an integrated approach to mind and body</div>
      </div>
    </div>
  );
}

LandingMain.propTypes = {};

export default LandingMain;
