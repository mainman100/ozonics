import React, { Component } from "react";
import classnames from "classnames";
//import styles from "./Ozone.module.scss";
import InfraredMain from './InfraredMain';
import InfraredIntro from './InfraredIntro';
import InfraredHeadlines from './InfraredHeadlines';
import InfraredExperience from './InfraredExperience';
import InfraredIssuesMap from './InfraredIssuesMap';
import InfraredBenefitsLong from './InfraredBenefitsLong';
import InfraredScience from './InfraredScience';
import InfraredPricing from './InfraredPricing';
import InfraredSauna from './InfraredSauna';

class Infrared extends Component {
  render() {
    return (
      <div className={classnames("container-fluid")}>
        <InfraredMain />
        <InfraredIntro />
        <InfraredHeadlines />
        <InfraredIssuesMap />
        <InfraredExperience />
        <InfraredSauna />
        <InfraredPricing />
        <InfraredBenefitsLong />
        {/* <InfraredScience /> */}
      </div>
    );
  }
}

export default Infrared;
