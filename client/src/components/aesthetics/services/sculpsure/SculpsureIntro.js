import React, { Component } from "react";
import classnames from "classnames";
import styles from "./SculpsureIntro.module.scss";
import BookButtonSection from "../../../common/BookButtonsSection";

class SculpsureIntro extends Component {
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
              src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/1864823.jpg"
              alt="sculpsure"
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
            At Precision Aesthetics by Ozonics, we offer SculpSure body contouring to eliminate hard to reach pockets of fat that exercise and other weight loss measures normally don't address. 
            </p>
            <p className={classnames("p-1", styles.intro)}>
              {" "}
            </p>
            <p className={classnames("p-1", styles.intro)}>
              You want you to look your best. You need to look your best. Cost should not be allowed to get in the way. We will
              therefore work with you to spread the costs of the treatment to
              make it as affordable as possible.
            </p>
          </div>

          <BookButtonSection pricingLink="/pricing/sculpsure" showConsult={true}/>
        </div>
      </div>
    );
  }
}

export default SculpsureIntro;
