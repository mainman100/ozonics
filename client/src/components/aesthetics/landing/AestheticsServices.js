import React, { Component } from "react";
import CardHorizontal from "../../common/CardHorizontal";
import classnames from "classnames";
import SectionHeadingAesthetics from '../../common/SectionHeadingAesthetics';
import styles from "./AestheticsServices.module.scss";
import "./AestheticsServices.module.scss";
import { aestheticsObjectives } from "../../../data/aestheticspage/aestheticsPage";

class AestheticsServices extends Component {
  render() {
    const data = aestheticsObjectives;

    let dataItems;

    dataItems = data.map(datum => (
      <CardHorizontal
        key={datum.id}
        issue={datum.issue}
        info={datum.info}
        treatment={datum.treatment}
        imgSRC={datum.imgSRC}
        link={datum.link}
      />
    ));

    return (
      <div className="container mt-2 ">
       <SectionHeadingAesthetics heading="which is right for you?" shadowheading="choose"/>
        <div className="row no-gutters">{dataItems}</div>
      </div>
    );
  }
}

AestheticsServices.propTypes = {};

export default AestheticsServices;
