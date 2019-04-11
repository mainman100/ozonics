import React from "react";
import classnames from "classnames";
import styles from "./OzoneMain.module.scss";

function OzoneMain() {
  return (
    <div className={classnames("container", styles.sectionMain)}>
          <div className={classnames("container", styles.sectionTop)}>
            <p className={classnames("m-0", "w-100", styles.sectionTitle)}>
              OZONE SAUNA
            </p>
          </div>
          </div>
  );
}

export default OzoneMain;
