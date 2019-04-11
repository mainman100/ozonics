import React, { Component } from "react";
import {CardFlip} from "../common/CardFlip";
import styles from "./LandingAestheticsQualitiesFlip.module.scss";
import classnames from "classnames";
import { aestheticsQualities } from "./LandingAestheticsQualitiesFlipData";

class LandingAestheticsQualitiesFlip extends Component {
  render() {
    const data = aestheticsQualities;

    let dataItems;

    dataItems = data.map(datum => (
      <CardFlip
        key={datum.id}
        title={datum.title}
        titleBack={datum.titleBack}
        subtitle={datum.subtitle}
        subtitleBack={datum.subtitleBack}
        text={datum.text}
        textBack={datum.textBack}
        footer={datum.footer}
        icon={datum.icon}
        showIcon={true}
        showFooter={true}
        bgColorFront={datum.bgColorFront}
        bgColorBack={datum.bgColorBack}
      />
    ));

    return (
      <div className={classnames("flex-container", styles.gridMain)}>
        <div
          className={classnames(
            "row",
            "no-gutters",
            "text-center",
            styles.dataGrid
          )}
        >
          {dataItems}
        </div>
      </div>
    );
  }
}

export default LandingAestheticsQualitiesFlip;
