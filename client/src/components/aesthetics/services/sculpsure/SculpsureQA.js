import React, { Component } from "react";
import classnames from "classnames";
import styles from "./SculpsureQA.module.scss";
import SectionHeadingAesthetics from '../../../common/SectionHeadingAesthetics';
import { Accordion, AccordionItem } from "react-sanfona";
import { qaSculpsure } from "./SculpsureQAData";

class SculpsureQA extends Component {
  
  render() {
    const data = qaSculpsure;

    let dataItems = [];
    let newItem;
    let dataAnswers;
    
    data.forEach( datum => {
      dataAnswers = datum.A.map((x, index) => <p key={index} className="text-justify">{x}</p>);
      
    newItem =(
      <AccordionItem titleClassName={classnames(styles.title)} key={datum.Q} title={datum.Q} expanded={datum === 1}>
      {dataAnswers}
    </AccordionItem>
    )
    dataItems.push(newItem);
    })

    
    return (
      <div className="container mt-2 mb-2">
        <SectionHeadingAesthetics heading="q &#38; a" headingshadow="q &#38; a" />
        <Accordion >{dataItems}</Accordion>
      </div>
    );
  }
}

export default SculpsureQA;
