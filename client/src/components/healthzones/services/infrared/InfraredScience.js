import React, { Component } from "react";
import classnames from "classnames";
import styles from "./InfraredScience.module.scss";
import SectionHeadingHealth from '../../../common/SectionHeadingHealth';
import { Accordion, AccordionItem } from "react-sanfona";
import { infraredScience } from "./InfraredScienceData";

class InfraredScience extends Component {
  render() {
    const data = infraredScience;
    //console.log(infraredScience);

    let dataItems = [];
    let newItem;
    let content;
    let title;

    data.forEach(datum => {
      title = `${datum.title}`;
      content = datum.conditions.map((x, index) => (
        <p key={index} style={{color: 'red', fontWeight: 'bold'}} className="text-justify">
          {x}
        </p>
      ));

      newItem = (
        <AccordionItem
          titleClassName={classnames(styles.title)}
          key={title}
          title={title}
          expanded={datum === 1}
        >
          {datum.text}
          {content}
        </AccordionItem>
      );
      dataItems.push(newItem);
    });

    return (
      <div className="container mt-5 mb-2">
       <SectionHeadingHealth heading="great science" headingshadow="science"/>
        <Accordion>{dataItems}</Accordion>
      </div>
    );
  }
}

export default InfraredScience;
