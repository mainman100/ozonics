import React, { Component } from "react";
import BotoxMain from './BotoxMain';
import BotoxIntro from './BotoxIntro';
import BotoxFeatures from './BotoxFeatures';
import BotoxQA from './BotoxQA';

class Botox extends Component {
  render() {
    return (
      <reactFragment>
        <BotoxMain />
        <BotoxIntro />
        <BotoxFeatures />
        <BotoxQA />
      </reactFragment>
    );
  }
}

export default Botox;
