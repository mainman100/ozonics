import React from "react";
import classnames from "classnames";
import styles from "./AestheticsIssuesMap.module.scss";
import "./AestheticsIssuesMap.scss";

export default function AestheticsIssuesMap() {
  return (    
    <div className={classnames("container-fluid ")}>
      
      <div className={classnames("container", styles.wrapper)}>
      
      <div className="row">
        <div id="hair" className="col-4 col-lg-2 p-2 pb-5">
          <div className="text-center">Unsightly Hair</div>
        </div>
        <div id="wrinkles" className="col-4 col-lg-2 p-2  pb-5">
          <div className="text-center">Wrinkles</div>
        </div>
        <div id="waist" className="col-4 col-lg-2 p-2  pb-5">
          <div className="text-center">Waist Fat</div>
        </div>
        <div id="acne" className="col-4 pt-4 col-lg-2 p-2  pb-5">
          <div className="text-center">Acne Scars</div>
        </div>
        <div id="age" className="col-4 pt-4 col-lg-2 p-2  pb-5">
          <div className="text-center">Anti-aging</div>
        </div>
        <div id="tattoo" className="col-4 col-lg-2 p-2 ">
          <div className="text-center"> Unwanted Tattoo</div>
        </div>
        </div>
      </div>
    </div>
  );
}
