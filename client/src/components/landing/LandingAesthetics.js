import React from "react";
import PropTypes from "prop-types";
import "./LandingAesthetics.css";
import CardImage from '../common/CardImage3';
import image1 from "../../assets/img/aesthetics_service_hairremoval.jpg";
import Aesthetics from '../../components/services/Aesthetics';

function LandingAesthetics(props) {
  return (
    <div className="container-fluid section-main">
      <div className="row no-gutters">
        <div className="p-2 col-12 bd-highlight section-header">THE AESTHETICS ZONE</div>
      </div>
      
          <Aesthetics />
      </div>
  );
}

LandingAesthetics.propTypes = {};

export default LandingAesthetics;
