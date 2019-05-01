import React, { Component } from 'react';
import classnames from 'classnames';
import styles from "./SaltBooth.module.scss";
import SectionHeadingHealth from '../../../common/SectionHeadingHealth';

export default class SaltBooth extends Component {
  render() {
    return (
      <div className={classnames("container-fluid pb-5", styles.sectionMain)}>
      <SectionHeadingHealth heading="booths" headingshadow="our salt"/>
      <div className={classnames("container")}>
        <div className={classnames("row", "no-gutters")}>
        <div className={classnames("col-12 col-md-8", styles.sectionDetail)}><p>The Salt Booth is an enclosed, dry salt therapy unit that provides individual and personalized skin and lung therapy. </p><p>We can adjust various levels and concentration of salt particles to offer a more individualized and targeted salt therapy session.</p><p>It incorporates a built-in high-quality LED reading light, a convenient dock and audio plug for your portable device, and marine quality music speakers. Although the session is only 10 - 30 mins, we don't want you or your child to be bored.</p></div>
        <div className="col-12 col-md-4"><img className="img-fluid" src="https://s3-us-west-2.amazonaws.com/ozonics-commercial/saltbooth-1-400x400.jpg" alt="ozone sauna"/></div>
          
        </div>
      </div>
      </div>
    )
  }
}
