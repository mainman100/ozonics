import React, { Component } from "react";
import classnames from "classnames";
import "./JuvedermFeatures.scss";
import styles from "./JuvedermFeatures.module.scss";
import SectionHeadingAesthetics from "../../../common/SectionHeadingAesthetics";
import  CardFeatures  from "../../../common/CardFeatures";
import { featuresJuvederm } from "./JuvedermFeaturesData";

class JuvedermFeatures extends Component {
  render() {
    const data = featuresJuvederm;

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

export default JuvedermFeatures;
