import React from "react";
import PropTypes from "prop-types";
import styles from "./CardFeatures.module.scss";
import classnames from "classnames";

const CardFeatures = ({
  title,
  subtitle,
  text,
  icon,
  showIcon,
  showTitle,
  showSubtitle,
  iconColor
}) => {
  return (
    <div className={classnames(styles.cardDiv)}>
      {showIcon ? (
        <div className={classnames("text-center")}>
        <h4><i style={{color: iconColor}} className={classnames(icon)} /></h4>
        </div>
      ) : null}
      <div
        className={classnames(styles.content, "text-justify", styles.cardBody)}
      >
        {showTitle ? <h5 className="mt-2 text-center">{title}</h5> : null}
        {showSubtitle ? (
          <h6 className={classnames("mt-2", "text-center", styles.subTitle)}>
            {subtitle}
          </h6>
        ) : null}
        <p className={classnames("mt-4", styles.cardText)}>{text}</p>
      </div>
    </div>
  );
};

CardFeatures.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
  showSubtitle: PropTypes.bool,
  showTitle: PropTypes.bool,
  showIcon: PropTypes.bool
};

CardFeatures.defaultProps = {
  type: "text",
  showTitle: true,
  showSubtitle: false,
  showIcon: true
};

export default CardFeatures;
