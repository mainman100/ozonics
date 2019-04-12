import React, { Component } from "react";
//import CardBasic from "../../common/CardBasicHealth";
import {CardFlip} from "../../common/CardFlip";
import styles from "./HealthzonesQualities.module.scss";
import SectionHeadingHealth from '../../common/SectionHeadingHealth';
import classnames from "classnames";
import {healthZOH} from './HealthzonesZOHData';

class HealthzonesQualities extends Component {
  
  render() {
    const data = healthZOH;

    let dataItems = [];
    let newItem;
    let content = [];
    

    data.forEach( datum => {
      content = datum.textBack.map((x, index) => <p key={index} className="text-justify">{x}</p>);
      
    newItem =(
      
      <CardFlip
        key={datum.id}
        title={datum.title}
        titleBack={datum.titleBack}
        subtitle={datum.subtitle}
        textBack={content}
        footer={datum.footer}
        imgSRC={datum.imgSRC}
        link={datum.link}
        showIcon={datum.showIcon}
        showFooter={datum.showFooter}
        showImage ={datum.showImage}
        showTitleBack = {datum.showTitleBack}
        showSubtitle ={datum.showSubtitle}
        showButton ={datum.showButton}
      />
    )
    dataItems.push(newItem);
    })

    return (
      <div className="container-fluid mb-5">
<SectionHeadingHealth heading="outstanding therapies" headingshadow="therapies"/>
      <div className={classnames("flex-container", styles.gridMain)}>
        <div className={classnames("row", "no-gutters", styles.dataGrid)}>
          {dataItems}
        </div>
      </div>
      </div>
    );
  }
}

export default HealthzonesQualities;
