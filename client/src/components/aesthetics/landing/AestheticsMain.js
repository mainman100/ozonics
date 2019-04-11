import React from "react";
import classnames from "classnames";
import styles from "./AestheticsMain.module.scss";

function AestheticsMain(props) {
  return (
    <div>
      <div className={classnames(styles.sectionTop)}>
        <p className={classnames("m-0", "p-1", styles.sectionTitle)}>
          PRECISION AESTHETICS
          <span className={classnames(styles.byOzonics)}>by Ozonics</span>
        </p>
        <p className={classnames("p-2", styles.slogan)}>
          Any holistic approach to health will address personal appearance.
        </p>
      </div>
    </div>
  );
}

AestheticsMain.propTypes = {};

export default AestheticsMain;
