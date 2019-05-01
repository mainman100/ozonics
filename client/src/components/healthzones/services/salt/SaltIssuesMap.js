import React from "react";
import classnames from "classnames";
import styles from "./SaltIssuesMap.module.scss";
import "./SaltIssuesMap.scss";

export default function SaltIssuesMap() {
  return (
    <div className={classnames("flex-container", styles.wrapper)}>
      <div className={classnames(styles.sectionTop)}>
        <p className={classnames("mb-2", "p-2", styles.sectionTitle)}>
          DO ANY APPLY?
        </p>
      </div>
      <div className="row no-gutters">
        <div id="a" className="col-3 pt-4 pb-4">
          <div className="text-center">Asthma</div>
        </div>
        <div id="b" className="col-3 pt-4 pb-4">
          <div className="text-center">Bronchitis</div>
        </div>
        <div id="c" className="col-3 pt-4 pb-4">
          <div className="text-center">COPD</div>
        </div>
        <div id="d" className="col-3 pt-4 col-lg-2 pb-4">
          <div className="text-center">Congested Lungs</div>
        </div>
        {/* <div id="e" className="col-4 pt-4 col-lg-2 pb-4">
          <div className="text-center">Diabetic ulcers</div>
        </div>
        <div id="f" className="col-4 col-lg-2 pt-4 pb-4">
          <div className="text-center">Weight Loss</div>
        </div> */}
      </div>
    </div>
  );
}
