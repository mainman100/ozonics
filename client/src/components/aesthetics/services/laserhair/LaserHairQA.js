import React, { Component } from "react";
import classnames from "classnames";
import styles from "./LaserHairQA.module.scss";
import SectionHeadingAesthetics from '../../../common/SectionHeadingAesthetics';
import { Accordion, AccordionItem } from "react-sanfona";
import { qaLaserHair } from "./LaserHairQAData";

class LaserHairQA extends Component {
  
  render() {
    const data = qaLaserHair;

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
        <SectionHeadingAesthetics heading="q &#38; a" shadowheading="q &#38; a" />
        <Accordion >{dataItems}</Accordion>
      </div>
    );
  }
}

export default LaserHairQA;
