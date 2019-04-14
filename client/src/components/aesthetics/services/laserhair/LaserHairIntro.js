import React, { Component } from "react";
import classnames from "classnames";
import styles from "./LaserHairIntro.module.scss";
import BookButtonSection from "../../../common/BookButtonsSection";

class LaserHairIntro extends Component {
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
              src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/1864827.jpg"
              alt="laser hair removal"
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
              If you’ve had enough of shaving and waxing to remove body hair,
              consider laser hair removal as a better alternative.
            </p>
            <p className={classnames("p-1", styles.intro)}>
              {" "}
              At Precision Aesthetics by Ozonics, our team of aesthetics
              specialists offer effective laser hair removal services using the
              most up to date cosmetic laser system.
            </p>
            <p className={classnames("p-1", styles.intro)}>
              You want to look your best. You need to look your best. Cost should not be allowed to get in the way. We will
              therefore work with you to spread the costs of the treatment to
              make it as affordable as possible.
            </p>
          </div>

          <BookButtonSection pricingLink="/pricing/laserhair" showConsult={true}/>
        </div>
      </div>
    );
  }
}

export default LaserHairIntro;
