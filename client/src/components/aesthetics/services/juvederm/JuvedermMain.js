import React from "react";
import classnames from "classnames";
import styles from "./JuvedermMain.module.scss";

function JuvedermMain() {
  
  return (
          <div className={classnames("container", styles.sectionMain)}>
          <div className={classnames("container", styles.sectionTop)}>
            <p className={classnames("m-0", "w-100", styles.sectionTitle)}>
              JUVEDERM
            </p>
          </div>
          </div>
  );
}

export default JuvedermMain;
