import React, { Component } from "react";
import classnames from "classnames";
import "./SculpsureFeatures.scss";
import styles from "./SculpsureFeatures.module.scss";
import SectionHeadingAesthetics from "../../../common/SectionHeadingAesthetics";
import  CardFeatures  from "../../../common/CardFeatures";
import { featuresSculpsure } from "./SculpsureFeaturesData";

class SculpsureFeatures extends Component {
  render() {
    const data = featuresSculpsure;

    let dataItems = [];
    let newItem;
    let content;

    data.forEach(datum => {
      content = datum.text.map((x, index) => (
        <p key={index} className="text-justify">
          {x}
        </p>
      ));

      newItem = (
        <CardFeatures
          titleClassName={classnames(styles.title)}
          key={datum.id}
          title={datum.title}
          text={content}
          icon={datum.icon}
          iconColor="salmon"
        />
      );
      dataItems.push(newItem);
    });

    return (
      <div className={classnames("container", styles.sectionMain)}>
        <SectionHeadingAesthetics heading="features" headingshadow="features"/>
        <div className="flex-container">
          <div className={classnames("row", styles.dataGrid)}>{dataItems}</div>
        </div>
      </div>
    );
  }
}

export default SculpsureFeatures;
