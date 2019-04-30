import React from "react";
import classnames from "classnames";
import styles from "./InfraredMain.module.scss";

function InfraredMain() {
  return (
    <div className={classnames("container", styles.sectionMain)}>
          <div className={classnames("container", styles.sectionTop)}>
            <p className={classnames("m-0", "w-100", styles.sectionTitle)}>
              INFRARED SAUNA
            </p>
          </div>
          </div>
  );
}

export default InfraredMain;
