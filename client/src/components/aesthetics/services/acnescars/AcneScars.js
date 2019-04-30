import React, { Component } from "react";
import AcneScarsMain from './AcneScarsMain';
import AcneScarsIntro from './AcneScarsIntro';
import AcneScarsFeatures from './AcneScarsFeatures';
import AcneScarsQA from './AcneScarsQA';

class AcneScars extends Component {
  render() {
    return (
      <reactFragment>
        <AcneScarsMain />
        <AcneScarsIntro />
        <AcneScarsFeatures />
        <AcneScarsQA />
      </reactFragment>
    );
  }
}

export default AcneScars;
