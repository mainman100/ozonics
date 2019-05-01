import React, { Component } from 'react';
import classnames from 'classnames';
import styles from "./OzoneSauna.module.scss";
import SectionHeadingHealth from '../../../common/SectionHeadingHealth';

export default class OzoneSauna extends Component {
  render() {
    return (
      <div className={classnames("container-fluid pb-5", styles.sectionMain)}>
      <SectionHeadingHealth heading="saunas" headingshadow="our ozone"/>
      <div className={classnames("container")}>
        <div className={classnames("row", "no-gutters")}>
        <div className="col-12 col-md-8"><p>Medical grade ozone is made from > 99% oxygen in an industry leading medical grade ozone generator and is introducted into the cabinet after the introduction of steam at a temperature of between 37 C (body temp) and 50 C (110 F).</p><p>At the end of the session, the ozone is sucked out and eliminated in an ozone destruction unit. No ozone enters the room itself.</p><p>This is super important - the ozone itself sterilizes the sauna. And it is also thoroughly cleaned inbetween each use. </p></div>
        <div className="col-12 col-md-4"><img className="img-fluid" src="https://s3-us-west-2.amazonaws.com/ozonics-commercial/ozone-2-400x400.jpg" alt="ozone sauna"/></div>
          
        </div>
      </div>
      </div>
    )
  }
}
