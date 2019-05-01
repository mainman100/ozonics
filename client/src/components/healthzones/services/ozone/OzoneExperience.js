import React, { Component } from "react";
import classnames from 'classnames';
import CardBasic2 from "../../../common/CardBasic2";
import styles from './OzoneExperience.module.scss';
import SectionHeadingHealth from '../../../common/SectionHeadingHealth';
import { ozoneExperience } from "./OzoneExperienceData";

export default class OzoneExperience extends Component {
  render() {
    const data = ozoneExperience;
    let dataItems = [];
    let newItem;
    let content;
    let title;

    data.forEach(datum => {
      title = `${datum.title} `;
      content = datum.text.map(x => (
        <p key={datum.id} className="text-justify">
          {x}
        </p>
      ));

      newItem = (
        <CardBasic2 key={datum.id} title={title} text={content} showTitle={true} />
      );
      dataItems.push(newItem);
    });
    return (
      <div className={classnames("container-fluid mt-2 mb-2", styles.sectionMain)}>
      <SectionHeadingHealth heading="experience" headingshadow="enjoyable"/>
      <div className={classnames("flex-container")}>
        <div className={classnames("row no-gutters", styles.gridData)}>
        {dataItems}
        </div>
      </div>
      </div>
    );
  }
}
