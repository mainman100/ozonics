import React, { Component } from "react";
import classnames from "classnames";
import styles from "./OzoneScience.module.scss";
import SectionHeadingHealth from '../../../common/SectionHeadingHealth';
import { Accordion, AccordionItem } from "react-sanfona";
import { ozoneScience } from "./OzoneScienceData";

class OzoneScience extends Component {
  render() {
    const data = ozoneScience;
    console.log(OzoneScience);

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
       <SectionHeadingHealth heading="the science" headingshadow=""/>
        <Accordion>{dataItems}</Accordion>
      </div>
    );
  }
}

export default OzoneScience;
