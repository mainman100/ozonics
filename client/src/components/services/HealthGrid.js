import React, { Component } from "react";
import CardImage from "../common/CardImageHealth";
import SectionHeadingHealth from '../common/SectionHeadingHealth';
import classnames from 'classnames';
import styles from "./HealthGrid.module.scss";
import {healthServices} from './HealthGridData';

class HealthGrid extends Component {
  
  render() {
    
    let showHeading;
    if (this.props.showHeading !== null) {showHeading = this.props.showHeading;} else {showHeading = true}

    const data = healthServices;

    let dataItems = [];

    data.forEach(datum => {
      if(datum.show){
        dataItems.push(<div className={classnames('col-xs-12', 'col-sm-12', 'col-md-6', 'col-lg-6', 'mb-2', styles.service )}>
        <CardImage
          key={datum.id}
          title={datum.title}
          subtitle={datum.subtitle}
          textMain={datum.textMain}
          textSecondary={datum.textSecondary}
          link={datum.link}
          showTextSecondary={true}
          imgSRC={datum.imgSRC}
        />
        </div>)
      }
    })

    return (
      <div className={classnames('container', styles.gridMain)}>
      { showHeading === true ?
      <SectionHeadingHealth heading="the zones" headingshadow="the zones"/> : null}
      <div className="flex-container">
        <div className={classnames("row", "no-gutters", styles.servicesGrid)}>{dataItems}</div>
      </div>
      </div>
    );
  }
}
export default HealthGrid;
