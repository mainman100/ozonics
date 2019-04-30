import React, { Component } from "react";
import IplMain from './IplMain';
import IplIntro from './IplIntro';
import IplFeatures from './IplFeatures';
import IplQA from './IplQA';

class Ipl extends Component {
  render() {
    return (
      <reactFragment>
        <IplMain />
        <IplIntro />
        <IplFeatures />
        <IplQA />
      </reactFragment>
    );
  }
}

export default Ipl;
