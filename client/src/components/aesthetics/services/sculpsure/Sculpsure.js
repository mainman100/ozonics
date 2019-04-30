import React, { Component } from "react";
import SculpsureMain from './SculpsureMain';
import SculpsureIntro from './SculpsureIntro';
import SculpsureFeatures from './SculpsureFeatures';
import SculpsureQA from './SculpsureQA';

class Sculpsure extends Component {
  render() {
    return (
      <reactFragment>
        <SculpsureMain />
        <SculpsureIntro />
        <SculpsureFeatures />
        <SculpsureQA />
      </reactFragment>
    );
  }
}

export default Sculpsure;
