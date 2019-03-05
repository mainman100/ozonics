import React from "react";
import PropTypes from "prop-types";
import "./CardImage.css";

const CardImage = ({ title, textMain, textSecondary, imgSRC }) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 bg-light">
      <img className="card-img-top img-fluid" src={imgSRC} alt={title} />
      <div className="div">{title}</div>
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
