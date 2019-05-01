import React, { Component } from "react";
import styles from "./SaltPricing.module.scss";
import classnames from 'classnames';
// import './SaltPricing.scss' ;
import CardBasic from "../../../common/CardBasic";
import SectionHeadingHealth from '../../../common/SectionHeadingHealth';
import { saltPricingData } from "./SaltPricingData";

export default class SaltPricing extends Component {
  render() {
    const data = saltPricingData;
    let dataItems = [];
    let newItem;
    let content;
    let title;

    data.forEach(datum => {
      content = datum.text.map(x => (
        <p key={datum.id} className="text-justify">
          {x}
        </p>
      ));

      newItem = (
        <CardBasic key={datum.id} title={datum.title} text={content} footer = {datum.footer} showTitle={true} showFooter={true} />
      );
      dataItems.push(newItem);
    });
    return (
      <div className={classnames("container-fluid pb-5", styles.sectionMain)}>
      <SectionHeadingHealth heading="packages" headingshadow="pricing"/>
      <div className={classnames("flex-container", styles.gridMain)}>
        <div className={classnames("row", "no-gutters", styles.dataGrid)}>
          {dataItems}
        </div>
      </div>
      </div>
    );
  }
}
