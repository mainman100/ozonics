import React, { Component } from "react";
import classnames from "classnames";
import styles from "./AcneScarsQA.module.scss";
import { Accordion, AccordionItem } from "react-sanfona";
import { qaAcneScars } from "./AcneScarsQAData";

class AcneScarsQA extends Component {
  
  render() {
    const data = qaAcneScars;

    let dataItems = [];
    let newItem;
    let dataAnswers;
    
    data.forEach( datum => {
      dataAnswers = datum.A.map((x, index) => <p key={index} className="text-justify">{x}</p>);
      
    newItem =(
      <AccordionItem titleClassName={classnames(styles.question)} key={datum.Q} title={datum.Q} expanded={datum === 1}>
      {dataAnswers}
    </AccordionItem>
    )
    dataItems.push(newItem);
    })

    
    return (
      <div className="container mt-2 mb-2">
        <Accordion >{dataItems}</Accordion>
      </div>
    );
  }
}

AcneScarsQA.propTypes = {};

export default AcneScarsQA;
