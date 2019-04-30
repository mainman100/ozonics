import React from "react";
import classnames from 'classnames';
import styles from "./InfraredIssuesMap.module.scss";
import "./InfraredIssuesMap.scss";

export default function InfraredIssuesMap() {
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
              In Pain
            </div>
          </div>
          <div id="b" className="col-4 col-lg-2 pt-4 pb-4">
            <div className="text-center" >
              Overweight
            </div>
          </div>
          <div id="c" className="col-4 col-lg-2 pt-4 pb-4">
            <div className="text-center" >
              Run down
            </div>
          </div>
          <div id="d" className="col-4 pt-4 col-lg-2 pb-4">
            <div className="text-center" >
              Stressed
            </div>
          </div>
          <div id="e" className="col-4 pt-4 col-lg-2 pb-4">
            <div className="text-center" >
              Hangover
            </div>
          </div>
          <div id="f" className="col-4 col-lg-2 pt-4 pb-4">
            <div className="text-center" >
              Cardiac Issues
            </div>
          </div>
        </div>
      </div>
  );
}
