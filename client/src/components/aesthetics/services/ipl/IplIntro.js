import React, { Component } from "react";
import classnames from "classnames";
import styles from "./IplIntro.module.scss";
import BookButtonSection from "../../../common/BookButtonsSection";

class IplIntro extends Component {
  render() {
    return (
      <div className={classnames("container", styles.sectionMain)}>
        <div className="row">
          <div
            className={classnames(
              "col-12",
              "col-md-4",
              styles.sectionIntroLeft
            )}
          >
            <img
              src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/1864825.jpg"
              alt="IPL"
            />
          </div>
          <div
            className={classnames(
              "col-12",
              "col-md-8",
              styles.sectionIntroRight
            )}
          >
            <p className={classnames("p-1", styles.intro)}>
            The team at Precision Aesthetics by Ozonics offers the Lumenis M22 IPL as one of many options to help you look and feel your best. Intense pulsed light, or IPL, is a skin treatment option that can provide impressive results without the need for surgery or recovery time. 
            </p>
            <p className={classnames("p-1", styles.intro)}>
              {" "}
              IPL can help reduce the appearance of fine lines and wrinkles and address hyperpigmentation, sun damage, and more. 
            </p>
            <p className={classnames("p-1", styles.intro)}>
              You want you to look your best. You need to look your best. Cost should not be allowed to get in the way. We will
              therefore work with you to spread the costs of the treatment to
              make it as affordable as possible.
            </p>
          </div>

          <BookButtonSection pricingLink="/pricing/ipl" showConsult={true}/>
        </div>
      </div>
    );
  }
}

export default IplIntro;
