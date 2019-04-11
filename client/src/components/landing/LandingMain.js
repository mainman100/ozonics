import React from "react";
import classnames from "classnames";
import styles from "./LandingMain.module.scss";

function LandingMain(props) {
  const showInfo = false;

  return (
    <div className={classnames("container-fluid m-0 p-0", styles.sectionMain)}>
      <div className={styles.sectionSlogan}>
        <div className={classnames("row", "no-gutters")}>
          <div className={classnames("col-md", styles.mainSlogan)}>
            one stop aesthetics and health
          </div>
          <div className={classnames("col-md", styles.secondarySlogan)}>
            an integrated approach to mind and body
          </div>
        </div>
      </div>
      <div className={classnames("row", "no-gutters")}>
        <div
          id={styles.sectionAesthetics}
          className={classnames(
            "col-12 col-md-6",
            styles.mainSections,
            "mask",
            "rgba-gradient"
          )}
        >
          <p className={styles.title}>PRECISION AESTHETICS</p>
          {showInfo ? (
            <div className={styles.description}>
              <h5 className={classnames("ml-2", styles.descriptionItem1)}>
                state of the art
              </h5>
              <h5 className={classnames("ml-2", styles.descriptionItem2)}>
                empathetic
              </h5>
              <ul className={styles.descriptionServicesList}>
                <li>LASER HAIR REMOVAL</li>
                <li>TATTOO REMOVAL</li>
                <li>ACNE SCARS</li>
                <li>and more</li>
              </ul>
            </div>
          ) : null}
        </div>
        <div
          id={styles.sectionHealth}
          className={classnames("col-12 col-md-6", styles.mainSections)}
        >
          <p className={styles.title}>INTEGRATED HEALTH</p>
          {showInfo ? (
            <div className={styles.description}>
              <h5 className={classnames("ml-2", styles.descriptionItem1)}>
                health therapies
              </h5>
              <h5 className={classnames("ml-2", styles.descriptionItem2)}>
                scientifically based
              </h5>
              <ul className={styles.descriptionServicesList}>
                <li>OZONE SAUNA</li>
                <li>INFRARED SAUNA</li>
                <li>SALT THERAPY</li>
                <li>DRIP BAR</li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

LandingMain.propTypes = {};

export default LandingMain;
