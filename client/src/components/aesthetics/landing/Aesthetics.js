import React from "react";
import AestheticsMain from "./AestheticsMain";
import AestheticsIntro from "./AestheticsIntro";
import AestheticsGrid from "../../services/AestheticsGrid";
import AestheticsServices from "./AestheticsServices";
import AestheticsIssuesMap from "./AestheticsIssuesMap";

export default function Aesthetics() {
  return (
    <reactFragment>
      <AestheticsMain />
      <AestheticsIntro />
      <AestheticsIssuesMap />
      <AestheticsServices />
      <AestheticsGrid showHeading={true}/>
    </reactFragment>
  );
}
