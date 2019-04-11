import React from "react";
import styles from "./LandingConceptMore.module.scss";
import classnames from "classnames";
import SectionHeadingHealth from '../common/SectionHeadingHealth';
// import LandingConceptMoreQualities from "./LandingConceptMoreQualities";

function LandingConceptMore() {
  return (
    <div className={classnames("container-fluid pt-3 pb-3", styles.sectionMain)}>
      
    <div className={classnames("row", "no-gutters", styles.introMain)}>
      <div className="p-1 col-12 w-100 text-center">
        <p className={classnames(styles.introSlogan)}>
          {" "}
          good health = happiness
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <p className={classnames("text-center", styles.introDetail)}>
          a regime of Ozonics' therapies will revolutionize your life
        </p>
        </div>
        </div>
        <div className="row">
        <div className="col-12 col-md-6">
        
        </div>
      <div id="" className="col-12 col-md-6">
        
      </div>
    </div>
  </div>
  );
}

export default LandingConceptMore;
