import React from "react";
import classnames from "classnames";
import styles from "./BotoxMain.module.scss";

function BotoxMain() {
  
  return (
          <div className={classnames("container", styles.sectionMain)}>
          <div className={classnames("container", styles.sectionTop)}>
            <p className={classnames("m-0", "w-100", styles.sectionTitle)}>
              BOTOX
            </p>
          </div>
          </div>
  );
}

export default BotoxMain;
