import React from "react";
import classnames from "classnames";
import styles from "./AcneScarsMain.module.scss";

function AcneScarsMain() {
  
  return (
          <div className={classnames("container", styles.sectionMain)}>
          <div className={classnames("container", styles.sectionTop)}>
            <p className={classnames("m-0", "w-100", styles.sectionTitle)}>
            ACNE SCARS
            </p>
          </div>
          </div>
  );
}

export default AcneScarsMain;
