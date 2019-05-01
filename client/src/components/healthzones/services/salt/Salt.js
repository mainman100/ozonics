import React, { Component } from "react";
import classnames from "classnames";
//import styles from "./Ozone.module.scss";
import SaltMain from './SaltMain';
import SaltIntro from './SaltIntro';
import SaltHeadlines from './SaltHeadlines';
import SaltExperience from './SaltExperience';
import SaltIssuesMap from './SaltIssuesMap';
import SaltBenefitsLong from './SaltBenefitsLong';
import SaltPricing from './SaltPricing';
import SaltBooth from './SaltBooth';

class Salt extends Component {
  render() {
    return (
      <div className={classnames("container-fluid")}>
        <SaltMain />
        <SaltIntro />
        <SaltHeadlines />
        <SaltIssuesMap />
        <SaltExperience />
        <SaltBooth />
        <SaltPricing />
        <SaltBenefitsLong />
        {/* <SaltScience /> */}
      </div>
    );
  }
}

export default Salt;
