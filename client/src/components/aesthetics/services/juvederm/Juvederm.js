import React, { Component } from "react";
import JuvedermMain from './JuvedermMain';
import JuvedermIntro from './JuvedermIntro';
import JuvedermFeatures from './JuvedermFeatures';
import JuvedermQA from './JuvedermQA';

class Juvederm extends Component {
  render() {
    return (
      <reactFragment>
        <JuvedermMain />
        <JuvedermIntro />
        <JuvedermFeatures />
        <JuvedermQA />
      </reactFragment>
    );
  }
}

export default Juvederm;
