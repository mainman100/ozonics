import React from "react";
import classnames from "classnames";
import styles from "./IplMain.module.scss";

function IplMain() {
  
  return (
          <div className={classnames("container", styles.sectionMain)}>
          <div className={classnames("container", styles.sectionTop)}>
            <p className={classnames("m-0", "w-100", styles.sectionTitle)}>
              IPL
            </p>
          </div>
          </div>
  );
}

export default IplMain;
