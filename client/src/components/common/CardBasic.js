import React from "react";
import PropTypes from "prop-types";
import styles from "./CardBasic.module.scss";
import './CardBasic.scss';
import classnames from "classnames";

const CardBasic = ({
  title,
  subtitle,
  text,
  footer,
  imgSRC,
  icon,
  showImage,
  showIcon,
  showTitle,
  showSubtitle,
  showFooter,
  cbTheme
}) => {
  return (
    <div className={classnames("card", styles.cardDiv)}>
      {showImage ? (
        <img src={imgSRC} className="card-img-top" alt={title} />
      ) : null}
      {showIcon ? (
        <div className={classnames("card-header", "text-center")}>
          <i className={icon} />
        </div>
      ) : null}
      <div
        className={classnames(
          "card-body", "cb-" + cbTheme,
          styles.content,
          "text-justify",
          styles.cardBody
        )}
      >
        {showTitle ? <h4 className="card-title text-center">{title}</h4> : null}
        {showSubtitle ? (
          <h6 className={classnames("card-subtitle", "m-2", "text-center", styles.subTitle)}>{subtitle}</h6>
        ) : null}
        <p className={classnames("card-text", styles.cardText)}>{text}</p>
      </div>
      {showFooter ? (
        <div className={classnames("card-footer text-center", styles.cardFooter)}>
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
  cbTheme: PropTypes.string
};

CardBasic.defaultProps = {
  type: "text",
  showImage: false,
  showTitle: true,
  showSubtitle: false,
  showIcon: false,
  showFooter: false,
  cbTheme: "theme1"
};

export default CardBasic;
