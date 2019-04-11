import React, { Component } from "react";
import CardImage from "../common/CardImageHealth";
import classnames from "classnames";
import styles from "./HealthGridLarge.module.scss";
import {healthServices} from './HealthGridData';

class HealthGridLarge extends Component {
  
  render() {
    const data = healthServices;

    let dataItems;

    dataItems = data.map(datum => (
      <div className={classnames("row", "no-gutters", "w-100", styles.service, {'bg-light': (datum.id%2 !== 0)}) }>
        <div className={classnames("col-md-6", styles.serviceLeft)}>
          <img
            className={classnames(styles.serviceImg)}
            src={datum.imgSRC}
            alt={datum.title}
          />
        </div>
        <div className={classnames("col-md-6", styles.serviceRight)}>
          <div className={styles.serviceInfo}>
            <p className={styles.subtitle}>{datum.subtitle}</p>
            <p className={styles.textMain}>{datum.textMain}</p>
            <p className={styles.textSecondary}>{datum.textSecondary}</p>
            <p className={styles.title}>{datum.title}</p>
          </div>
        </div>
      </div>
    ));

    return (
      <div className={classnames("container", styles.gridMain)}>
        <div className="row no-gutters">{dataItems}</div>
      </div>
    );
  }
}
export default HealthGridLarge;
