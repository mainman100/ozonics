import React from "react";
import classnames from "classnames";
import styles from "./SaltMain.module.scss";

function SaltMain() {
  return (
    <div className={classnames("container", styles.sectionMain)}>
          <div className={classnames("container", styles.sectionTop)}>
            <p className={classnames("m-0", "w-100", styles.sectionTitle)}>
              SALT BOOTH
            </p>
          </div>
          </div>
  );
}

export default SaltMain;
