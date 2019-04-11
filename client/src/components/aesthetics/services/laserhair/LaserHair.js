import React, { Component } from "react";
import LaserHairMain from './LaserHairMain';
import LaserHairIntro from './LaserHairIntro';
import LaserHairFeatures from './LaserHairFeatures';
import LaserHairQA from './LaserHairQA';

class LaserHair extends Component {
  render() {
    return (
      <reactFragment>
        <LaserHairMain />
        <LaserHairIntro />
        <LaserHairFeatures />
        <LaserHairQA />
      </reactFragment>
    );
  }
}

export default LaserHair;
