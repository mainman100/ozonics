import React, { Component } from "react";
import CardBasic from "../../common/CardBasicHealth";
import SectionHeadingHealth from '../../common/SectionHeadingHealth';
import styles from "./HealthzonesQualities.module.scss";
import classnames from "classnames";
import {healthQualities} from './HealthzonesQualitiesData';

class HealthzonesQualities extends Component {
  
  render() {
    const data = healthQualities;

    let dataItems;

    dataItems = data.map(datum => (
      <CardBasic
        key={datum.id}
        title={datum.title}
        subtitle={datum.subtitle}
        text={datum.text}
        footer={datum.footer}
        icon={datum.icon}
        showIcon={true}
        showFooter={true}
      />
    ));

    return (
      <div className="container-fluid mb-5">
      <SectionHeadingHealth heading="great service"/>
      <div className={classnames("flex-container", styles.gridMain)}>
        <div className={classnames("row", "no-gutters", styles.dataGrid)}>
          {dataItems}
        </div>
      </div>
      </div>
    );
  }
}

export default HealthzonesQualities;
