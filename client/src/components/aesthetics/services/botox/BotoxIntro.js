import React, { Component } from "react";
import classnames from "classnames";
import styles from "./BotoxIntro.module.scss";
import BookButtonSection from "../../../common/BookButtonsSection";

class BotoxIntro extends Component {
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
              src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/1864822.jpg"
              alt="botox"
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
            Whether you have crow’s feet, deep wrinkles, or frown lines, Botox® injections can revitalize your skin. Our team of doctors and aestheticians uses injectable fillers to soften the appearance of fine lines and wrinkles. 
            </p>
            <p className={classnames("p-1", styles.intro)}>
              {" "}
              Botox is a safe, fast, and painless procedure that reverses the signs of aging and beautifully enhances your existing features. To learn about how Botox can help you regain your youthful appearance, call Ozonics' Precision Aesthetics or book your appointment online today.
            </p>
            <p className={classnames("p-1", styles.intro)}>
              You want to look your best. You need to look your best. Cost should not be allowed to get in the way. We will
              therefore work with you to spread the costs of the treatment to
              make it as affordable as possible.
            </p>
          </div>

          <BookButtonSection pricingLink="/pricing/botox" showConsult={true}/>
        </div>
      </div>
    );
  }
}

export default BotoxIntro;
