import React, { Component } from "react";
import classnames from "classnames";
import "./IplFeatures.scss";
import styles from "./IplFeatures.module.scss";
import SectionHeadingAesthetics from "../../../common/SectionHeadingAesthetics";
import  CardFeatures  from "../../../common/CardFeatures";
import { featuresIpl } from "./IplFeaturesData";

class IplFeatures extends Component {
  render() {
    const data = featuresIpl;

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

export default IplFeatures;
