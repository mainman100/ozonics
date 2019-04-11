import React from "react";
import PropTypes from "prop-types";
import styles from "./CardBasicHealth.module.scss";
import classnames from "classnames";

const CardBasic = ({
  title,
  subtitle,
  text,
  footer,
  imgSRC,
  link,
  icon,
  showImage,
  showIcon,
  showTitle,
  showSubtitle,
  showFooter,
  showButton
}) => {
  return (
    <div className={classnames("card", styles.cardDiv)}>
      {showImage ? (
        <img src={imgSRC} className="card-img-top" alt={title} />
      ) : null}
      {showIcon ? (
        <div class="card-header text-center text-muted">
          <i className={icon} />
        </div>
      ) : null}
      <div
        className={classnames(
          "card-body",
          styles.content,
          "text-justify",
          styles.cardBody
        )}
      >
        {showTitle ? <h5 className="card-title text-center">{title}</h5> : null}
        {showSubtitle ? (
          <h6 className={classnames("card-subtitle", "m-2", "text-center", styles.subTitle)}>{subtitle}</h6>
        ) : null}
        <p className={classnames("card-text", styles.cardText)}>{text}</p>
      </div>
      {showButton ? (
        <div className={classnames("card-footer", "text-center")}>
        <a className={classnames("btn", "btn-info", styles.btnMoreInfo)} href={link}>more info</a>
          
        </div>
      ) : null}
      {showFooter ? (
        <div className={classnames("card-footer", "text-center",styles.cardFooter)}>
          {footer}
        </div>
      ) : null}
    </div>
  );
};

CardBasic.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
  footer: PropTypes.string,
  imgSRC: PropTypes.string,
  showImage: PropTypes.bool,
  showSubtitle: PropTypes.bool,
  showTitle: PropTypes.bool,
  showFooter: PropTypes.bool,
  showIcon: PropTypes.bool,
  showButton: PropTypes.bool
};

CardBasic.defaultProps = {
  type: "text",
  showImage: false,
  showTitle: true,
  showSubtitle: false,
  showIcon: false,
  showFooter: false,
  showButton: false
};

export default CardBasic;
