import React, { Component } from "react";
import CardBasic from "../../common/CardBasic";
import classnames from "classnames";
import styles from "./AestheticsIntro.module.scss";
import { aestheticsIntro } from "./AestheticsIntroData";

class AestheticsIntro extends Component {
  render() {
    const data = aestheticsIntro;

    let dataItems;

    dataItems = data.map(datum => (
      <CardBasic key={datum.id} text={datum.text} showTitle={false} />
    ));

    return (
      <div
        className="container-fluid"
      >
        <div className="row no-gutters">
          <p className={classnames(styles.sectionHeading)}>
            Why Precision Aesthetics? </p><span className={classnames('mb-5', styles.byOzonics)}>by Ozonics</span>
          
        </div>
        <div className={classnames("flex-container", 'mb-5', styles.gridMain)}>
          <div
            className={classnames(
              "row",
              "no-gutters",
              "text-center",
              styles.dataGrid
            )}
          >
            {dataItems}
          </div>
        </div>
      </div>
    );
  }
}

export default AestheticsIntro;
