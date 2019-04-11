import React, { Component } from "react";
import CardBasic from "../common/CardBasic";
import styles from "./LandingAestheticsQualities.module.scss";
import classnames from 'classnames';
import {aestheticsQualities} from './LandingAestheticsQualitiesData';

class LandingAestheticsQualities extends Component {
 
  render() {
    
  const data = aestheticsQualities;
   
    let dataItems;

    dataItems = data.map(datum => (
      <CardBasic
        key={datum.id}
        title={datum.title}
        subtitle={datum.subtitle}
        text={datum.text}
        footer={datum.footer}
        icon={datum.icon}
        showIcon={true}
        showFooter={true}
        
      />
    ));
 
    return (
      <div className={classnames('flex-container-fluid', styles.gridMain)}>
       <div className={classnames('row', 'no-gutters', 'text-center', styles.dataGrid)}> 
           {dataItems}
        </div>
      </div> 
    );
  }
}

export default LandingAestheticsQualities;
