import React from "react";
import styles from "./LandingHealth.module.scss";
import classnames from "classnames";
import SectionHeadingHealth from "../common/SectionHeadingHealth";
import HealthGrid from "../services/HealthGrid";
// import LandingHealthQualities from "./LandingHealthQualities";

function LandingHealth() {
  return (
    /* This is the section of the Home/Landing page that contains all the sections for the Precision Health unit.
    It is a container (container-fluid) with a row for each section*/
    <div className={classnames("container-fluid ", styles.sectionMain)}>
      {/* Health Header */}
      <SectionHeadingHealth heading="zones of health" headingshadow="zoh" />
      {/* Health Introduction */}
      <div className={classnames("row no-gutters pb-5", styles.introMain)}>
        <div className="p-3 text-center">
          <p className={classnames(styles.introSlogan)}>
            {" "}
            Improve and maintain your health with our range of
            Health Therapies
          </p>
          <p className={classnames(styles.introDetail)}>
            Zones of health, providing therapies that are scientifically based
            and which address wellness and specific health issues.
          </p>
        </div>
      </div>

      {/* Health Services */}
      <div className={classnames("row", styles.healthGrid)}>
        <div className={classnames("container")}>
          <HealthGrid showHeading={false} />
        </div>
      </div>
    </div>
  );
}

export default LandingHealth;
