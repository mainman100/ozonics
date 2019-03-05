import React from "react";
import PropTypes from "prop-types";
import "./CardImage.css";

const CardImage = ({ title, textMain, textSecondary, imgSRC }) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
      <div className="card text-black">
        <img className="card-img img-fluid" src={imgSRC} alt={title} />
        <div className="card-img-overlay">
          <h5 className="card-title mt-2">{title}</h5>
          <p className="card-text">{textMain}</p>
          {/* <p className="card-text">{textSecondary}</p> */}
          <div className="btn btn-dark">more info</div>
        </div>
      </div>
    </div>
  );
};

CardImage.propTypes = {
  title: PropTypes.string.isRequired,
  textMain: PropTypes.string.isRequired,
  textSecondary: PropTypes.string,
  imgSRC: PropTypes.string.isRequired
};

CardImage.defaultProps = {
  type: "text"
};

export default CardImage;
