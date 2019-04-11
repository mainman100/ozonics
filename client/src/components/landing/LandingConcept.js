import React from "react";
import classnames from "classnames";
import styles from "./LandingConcept.module.scss";

function LandingConcept() {
  return (
    <div className={classnames("container-fluid pt-3 pb-3", styles.sectionMain)}>
      
      <div className={classnames("row", "no-gutters", styles.introMain)}>
        <div className="p-1 col-12 w-100 text-center">
          <p className={classnames(styles.introSlogan)}>
            {" "}
            Make Ozonics part of your lifestyle
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p className={classnames("text-center", styles.introDetailSlogan)}>
            healthy mind and a healthy body
          </p>
          </div>
          </div>
          <div className="row">
          <div className="col-12 col-md-6">
          <p className={classnames(styles.introDetail)}>
            {" "}
            Our Precision Aesthetics treatments will assist you to achieve the
            image you want, and the self-confidence that you deserve.
          </p>
          </div>
        <div id="" className="col-12 col-md-6">
          <p className={classnames(styles.introDetail)}>
            {" "}
            Our Zones of Health will enable you to improve your general feeling
            of physical well-being, as well as to alleviate a wide range of
            health conditions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingConcept;
