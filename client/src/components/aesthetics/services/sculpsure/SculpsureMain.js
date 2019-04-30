import React from "react";
import classnames from "classnames";
import styles from "./SculpsureMain.module.scss";

function SculpsureMain() {
  
  return (
          <div className={classnames("container", styles.sectionMain)}>
          <div className={classnames("container", styles.sectionTop)}>
            <p className={classnames("m-0", "w-100", styles.sectionTitle)}>
              SCULPSURE
            </p>
          </div>
          </div>
  );
}

export default SculpsureMain;
