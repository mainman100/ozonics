import React, { Component } from "react";
import CardBasic1 from "../../../common/CardBasic1";
import SectionHeadingHealth from '../../../common/SectionHeadingHealth';
import { saltHeadlines } from "./SaltHeadLinesData";

export default class SaltHeadlines extends Component {
  render() {
    const data = saltHeadlines;
    let dataItems = [];
    let newItem;
    let content;
    let title;

    data.forEach(datum => {
      title = `${datum.title} `;
      content = datum.text.map(x => (
        <p key={datum.id} className="text-justify">
          {x}
        </p>
      ));

      newItem = (
        <CardBasic1 key={datum.id} title={title} text={content} showTitle={true} cbTheme="theme2" />
      );
      dataItems.push(newItem);
    });
    return (
      <div className="container mt-2 mb-2">
      <SectionHeadingHealth heading="highlights" headingshadow="headlines"/>
        <div className="row no-gutters">{dataItems}</div>
      </div>
    );
  }
}
