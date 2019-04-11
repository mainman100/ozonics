import React from "react";
import classnames from "classnames";
import styles from "./LaserHairMain.module.scss";

function LaserHairMain() {
  
  return (
          <div className={classnames("container", styles.sectionMain)}>
          <div className={classnames("container", styles.sectionTop)}>
            <p className={classnames("m-0", "w-100", styles.sectionTitle)}>
              LASER HAIR REMOVAL
            </p>
          </div>
          </div>
  );
}

export default LaserHairMain;
