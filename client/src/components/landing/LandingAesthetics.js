import React from "react";
import styles from "./LandingAesthetics.module.scss";
import classnames from "classnames";
import AestheticsGrid from "../services/AestheticsGrid";
import SectionHeadingAesthetics from "../common/SectionHeadingAesthetics";
import LandingAestheticsQualities from "./LandingAestheticsQualities";

function LandingAesthetics(props) {
  return (
    /* This is the section of the Home/Landing page that contains all the sections for the Precision Aesthetics unit.
    It is a container (container-fluid) with a row for each section*/
    <div className={classnames("container-fluid", styles.sectionMain)}>
      {/* Aesthetics Header */}
      <SectionHeadingAesthetics
        heading="aesthetics"
        headingshadow="precision"
      />
      {/* Aesthetics Introduction */}
      <div
        className={classnames("row", "no-gutters", "pb-5", styles.introMain)}
      >
        <div className="p-3 text-center">
          <p className={classnames("pb-4", styles.introSlogan)}>
            {" "}
            Looking after yourself is not a luxury
          </p>
          <p className={classnames(styles.introDetail)}>
            Easy convenient access to individualized, professional aesthetics
            treatments, which will enhance your self image, make you feel good
            about yourself, and contribute to your overall health.
          </p>
          <p className={classnames(styles.introDetail)}>
            Our aim is to make it as easy, comfortable and affordable as
            possible for you to achieve your desired look.
          </p>
        </div>
      </div>

      {/* Aesthetics Qualities - the component jsx is a flex container */}
      <LandingAestheticsQualities />

      {/* Aesthetics Services Header */}
      <div className="row" />
      {/* Aesthetics Services */}
      <div className={classnames("row", "pb-4", styles.aestheticsGrid)}>
        <AestheticsGrid showHeading={true} />
      </div>
    </div>
  );
}

export default LandingAesthetics;
