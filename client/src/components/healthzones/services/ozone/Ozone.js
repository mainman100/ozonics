import React, { Component } from "react";
import classnames from "classnames";
//import styles from "./Ozone.module.scss";
import OzoneMain from './OzoneMain';
import OzoneIntro from './OzoneIntro';
import OzoneHeadlines from './OzoneHeadlines';
import OzoneExperience from './OzoneExperience';
import OzoneIssuesMap from './OzoneIssuesMap';
import OzoneBenefitsLong from './OzoneBenefitsLong';
import OzoneScience from './OzoneScience';
import OzonePricing from './OzonePricing';
import OzoneSauna from './OzoneSauna';

class Ozone extends Component {
  render() {
    return (
      <div className={classnames("container-fluid")}>
        <OzoneMain />
        <OzoneIntro />
        <OzoneHeadlines />
        <OzoneIssuesMap />
        <OzoneExperience />
        <OzoneSauna />
        <OzonePricing />
        <OzoneBenefitsLong />
        <OzoneScience />
      </div>
    );
  }
}

export default Ozone;
