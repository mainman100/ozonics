import React, { Component } from "react";
import CardImage from "../common/CardImageAesthetics";
import SectionHeadingAesthetics from "../common/SectionHeadingAesthetics";
import styles from "./AestheticsGrid.module.scss";
import classnames from "classnames";
import { aestheticsServices } from "./AestheticsGridData";

class AestheticsGrid extends Component {
  render() {
    let showHeading = this.props;
    if (showHeading !== null) {
      showHeading = this.props.showHeading;
    } else {
      showHeading = true;
    }

    const services = aestheticsServices;
    let serviceItems = [];

    services.forEach(service => {
      if (service.show) {
        serviceItems.push(
          <CardImage
            key={service.id}
            title={service.title}
            textMain={service.textMain}
            textSecondary={service.textSecondary}
            showTextSecondary={false}
            link={service.link}
            imgSRC={service.imgSRC}
          />
        );
      }
    });

    return (
      <div className={classnames("container", styles.gridMain)}>
        {showHeading === true ? (
          <SectionHeadingAesthetics heading="services" headingshadow="aesthetics" />
        ) : null}
        <div className="flex-container">
          <div
            className={classnames(
              "row",
              "no-gutters",
              "mb-5",
              styles.servicesGrid
            )}
          >
            {serviceItems}
          </div>
        </div>
      </div>
    );
  }
}

export default AestheticsGrid;
