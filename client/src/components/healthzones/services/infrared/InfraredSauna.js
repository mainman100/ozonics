import React, { Component } from "react";
import classnames from "classnames";
import styles from "./InfraredSauna.module.scss";
import SectionHeadingHealth from "../../../common/SectionHeadingHealth";

export default class InfraredSauna extends Component {
  render() {
    return (
      <div className={classnames("container-fluid pb-5", styles.sectionMain)}>
        <SectionHeadingHealth heading="saunas" headingshadow="our infrared" />
        <div className={classnames("container")}>
          <div className={classnames("row", "no-gutters")}>
            <div className="col-12 col-md-8">
              <p>
                We use saunas with high output combination carbon/ceramic far
                infrared and full spectrum heaters featuring virtually EMF/ELF
                free infrared heating technology.
              </p>
              <p>
                You not only get the highest quality infrared heat, but you get
                a lot of it, and right where you want it – your body core. We
                position our heaters so that they surround your body
                concentrating the heat on your body core.
              </p>
              <p>
                The key to infrared therapy is heating your body directly. The saunas we use have heaters on the front wall, back
                wall, side walls, underneath the bench, next to your calves and
                in the floor.
              </p>
              <p>
                The infrared spectrum is comprised of near, mid and far
                infrared. The following
                are some of the benefits of full spectrum infrared therapy:
              </p>
              <p>
                • Near Infrared is absorbed
                just below the surface of the skin creating a sweat that                promotes healing and revitalization.
              </p>
              <p>
                • Mid infrared penetrates the body’s soft tissue increasing circulation, releasing oxygen to reach injured areas.
              </p>
              <p>
                • Far infrared penetrates the
                fat cells causing them to vibrate and expel toxins, and to stimulate your metabolism to aid in weight-loss.
              </p>
            </div>
            <div className={classnames("col-12 col-md-4 p-3")}>
              <img
                className="img-fluid"
                src="https://s3-us-west-2.amazonaws.com/ozonics-commercial/infrared-1-600x400.jpg"
                alt="infrared sauna"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
