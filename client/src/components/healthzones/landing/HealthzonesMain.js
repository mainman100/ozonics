import React from "react";
import classnames from "classnames";
import styles from "./HealthzonesMain.module.scss";

function HealthzonesMain(props) {
  return (
    <div>
      <div className={classnames(styles.healthSectionTop)}>
        <p className={classnames("m-0", "p-1", styles.healthTitle)}>
          ZONES OF HEALTH
          <span className={classnames(styles.byOzonics)}>by Ozonics</span>
        </p>
        <p className={classnames("p-2", styles.healthSloganPara)}>
          REJUVENATE&nbsp;&nbsp;&nbsp;&nbsp;PROTECT&nbsp;&nbsp;&nbsp;&nbsp;HEAL
        </p>
      </div>
    </div>
  );
}

HealthzonesMain.propTypes = {};

export default HealthzonesMain;
