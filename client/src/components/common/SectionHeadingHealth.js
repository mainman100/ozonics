import React from "react";
import PropTypes from "prop-types";
import styles from "./SectionHeadingHealth.module.scss";
import './SectionHeading.scss';
import classnames from "classnames";

const SectionHeading = ({
  heading,
  headingshadow
}) => {
  
  return (
    <div className={classnames("container", styles.sectionMain)}>
          <div id="title1" className={classnames('', styles.sectionTitleShadow)}>
            {headingshadow}
          </div>
          <div data-aos="zoom-in" id="title2" className={classnames( styles.sectionTitle)}>
            {heading}
          </div>
        </div>
  );
};

SectionHeading.propTypes = {
  heading: PropTypes.string.isRequired
};

SectionHeading.defaultProps = {
  type: "text",
};

export default SectionHeading;
