import React, { Component } from "react";
import classnames from "classnames";
import styles from "./JuvedermIntro.module.scss";
import BookButtonSection from "../../../common/BookButtonsSection";

class JuvedermIntro extends Component {
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
              src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/1864826.jpg"
              alt="juvederm"
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
            As you age, your face naturally loses the subcutaneous fat that plumps your cheeks and fills out your facial features, leading to sagging skin, fine lines, and wrinkles. 
            </p>
            <p className={classnames("p-1", styles.intro)}>
              {" "}
              Don’t despair, at Precision Aesthetics by Ozonics, our highly-trained team offers you a solution with JuvedermⓇ. The #1 selling collection of dermal fillers in the United States, Juvederm provides specialized fillers to each area of your face. 
            </p>
            <p className={classnames("p-1", styles.intro)}>
              You want you to look your best. You need to look your best. Cost should not be allowed to get in the way. We will
              therefore work with you to spread the costs of the treatment to
              make it as affordable as possible.
            </p>
          </div>

          <BookButtonSection pricingLink="/pricing/juvederm" showConsult={true}/>
        </div>
      </div>
    );
  }
}

export default JuvedermIntro;
