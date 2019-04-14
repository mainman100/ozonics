import React from "react";
import PropTypes from "prop-types";
import styles from "./CardBasic1.module.scss";
import "./CardBasic1.scss";
import classnames from "classnames";

const CardBasic1 = ({
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
    <div
      className={classnames(
        "col-xs-12",
        "col-sm-12",
        "col-md-6",
        "col-lg-3",
        "pb-2"
      )}
    >
      <div className={classnames("card", styles.cardDiv)}>
        {showImage ? (
          <img src={imgSRC} className="card-img-top" alt={title} />
        ) : null}
        {showIcon ? (
          <div class="card-header text-muted">
            <i className={icon} />
          </div>
        ) : null}
        <div
          className={classnames("card-body", "cb-" + cbTheme, "text-justify", styles.cardBody)}
        >
          {showTitle ? <h5 className={classnames("card-title", "text-center", styles.cardTitle)}>{title}</h5> : null}
          {showSubtitle ? (
            <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
          ) : null}
          <p className={classnames("card-text", styles.cardText)}>{text}</p>
        </div>
        {showFooter ? (
          <div className={classnames("card-footer", "text-center", styles.cardFooter)}>
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
};

CardBasic1.propTypes = {
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

CardBasic1.defaultProps = {
  type: "text",
  showImage: false,
  showTitle: true,
  showSubtitle: false,
  showIcon: false,
  showFooter: false,
  cbTheme: "theme1"
};

export default CardBasic1;
