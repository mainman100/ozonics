import React from "react";
import PropTypes from "prop-types";
import styles from "./CardImageAesthetics.module.scss";
import classnames from 'classnames';

const CardImage = ({
  title,
  textMain,
  showTextSecondary,
  textSecondary,
  link,
  imgSRC
}) => {
  return (
    <div className={classnames('col-12', 'col-md-6', 'col-lg-3', styles.service )}>
      <img className={classnames(styles.serviceImg, 'w-100', 'img-fluid')}  src={imgSRC} alt={title} />
      <div className={styles.serviceOverlay}>
        <div className={styles.serviceTitle}>{title}</div>
        <div className={styles.serviceText}>{textMain}</div>
        {showTextSecondary === true ? (
          <div className={styles.serviceText2}>{textSecondary} </div>
        ) : null}
        <div className={styles.serviceInfo}>
          <a href={link} className="btn btn-info">
            tell me more
          </a>
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
