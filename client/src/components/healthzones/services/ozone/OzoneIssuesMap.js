import React from "react";
import classnames from 'classnames';
import styles from "./OzoneIssuesMap.module.scss";
import "./OzoneIssuesMap.scss";

export default function OzoneIssuesMap() {
  return (
    
      <div className={classnames("container", styles.wrapper)}>
      <div className={classnames(styles.sectionTop)}>
            <p className={classnames("mb-2", "p-2", styles.sectionTitle)}>
                DO ANY APPLY?
            </p>
          </div>
        <div className="row no-gutters">
          <div id="a" className="col-4 col-lg-2 pt-4">
            <div className="text-center" >
              Fatigue
            </div>
          </div>
          <div id="b" className="col-4 col-lg-2 pt-4 pb-4">
            <div className="text-center" >
              Acne
            </div>
          </div>
          <div id="c" className="col-4 col-lg-2 pt-4 pb-4">
            <div className="text-center" >
              Run down
            </div>
          </div>
          <div id="d" className="col-4 pt-4 col-lg-2 pb-4">
            <div className="text-center" >
              Sunburn
            </div>
          </div>
          <div id="e" className="col-4 pt-4 col-lg-2 pb-4">
            <div className="text-center" >
              Diabetic ulcers
            </div>
          </div>
          <div id="f" className="col-4 col-lg-2 pt-4 pb-4">
            <div className="text-center" >
              Weight Loss
            </div>
          </div>
        </div>
      </div>
  );
}
