import React, { Component } from "react";
import classnames from "classnames";
import styles from "./OzoneBenefitsLong.module.scss";
import SectionHeadingHealth from '../../../common/SectionHeadingHealth';
import { Accordion, AccordionItem } from "react-sanfona";
import { ozoneBenefits } from "./OzoneBenefitsLongData";

class OzoneBenefits extends Component {
  
  render() {
    const data = ozoneBenefits;
    
    let dataItems = [];
    let newItem;
    let content;
    let title;

    data.forEach( datum => {
      title = `${datum.benefit} `;
      content = datum.benefits.map((x, index) => <p key={index} className="text-justify">{x}</p>);
      
    newItem =(
      <AccordionItem titleClassName={classnames(styles.title)} key={title} title={title} expanded={datum === 1}>
      {content}
    </AccordionItem>
    )
    dataItems.push(newItem);
    })

    return (
      <div className="container mt-5 mb-2">
      <SectionHeadingHealth heading="benefits" headingshadow="benefits"/>
        <Accordion >{dataItems}</Accordion>
      </div>
    );
  }
}

export default OzoneBenefits;
