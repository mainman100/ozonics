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
        <div className="col-12 col-md-8"><p></p></div>
        <div className="col-12 col-md-4"><img className="img-fluid" src="https://s3-us-west-2.amazonaws.com/ozonics-commercial/saltbooth-1-400x400.jpg" alt="ozone sauna"/></div>
          
        </div>
      </div>
      </div>
    )
  }
}
