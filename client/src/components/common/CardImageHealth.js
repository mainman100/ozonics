import React from "react";
import PropTypes from "prop-types";
import styles from "./CardImageHealth.module.scss";
import classnames from 'classnames';

const CardImage = ({
  title,
  subtitle,
  textMain,
  showTextSecondary,
  textSecondary,
  link,
  imgSRC
}) => {
  return (
    <reactFragment>
      <img className={classnames(styles.serviceImg, 'w-100')}  src={imgSRC} alt={title} />
      <div className={classnames(styles.serviceOverlay)}>
        <div className={styles.serviceTitle}>{title}</div>
        <div className={styles.serviceSubtitle}>{subtitle}</div>
        <div className={styles.serviceText}>{textMain}</div>
        {showTextSecondary === true ? (
          <div className={styles.serviceText2}>{textSecondary} </div>
        ) : null}
        <div className={styles.serviceInfo}>
          <a href={link} className="btn btn-info">
            tell me more
          </a>
        </div>
        <div className={styles.serviceBook}>
          <a href="" className="btn btn-success">
            BOOK
          </a>
        </div>
      </div>
      </reactFragment>
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
