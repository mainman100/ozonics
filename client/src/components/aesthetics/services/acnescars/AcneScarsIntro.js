import React, { Component } from "react";
import classnames from "classnames";
import styles from "./AcneScarsIntro.module.scss";
import BookButtonSection from "../../../common/BookButtonsSection";

class AcneScarsIntro extends Component {
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
              src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/1864821.jpg"
              alt="acne scars removal"
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
            Acne scars can certainly make an impact on your self-confidence. Fortunately, you don’t have to live with them forever. The skin care experts at at Precision Aesthetics in Orlando, Florida, use the Icon™ laser system for acne scar treatment.  
            </p>
            <p className={classnames("p-1", styles.intro)}>
              {" "}
              When you visit with an aesthetic specialist at the practice, you get a custom acne scar treatment plan, based on your needs. You should start noticing an improvement in your acne scars shortly after your first treatment.
            </p>
            <p className={classnames("p-1", styles.intro)}>
              You want to look your best. You need to look your best. Cost should not be allowed to get in the way. We will
              therefore work with you to spread the costs of the treatment to
              make it as affordable as possible.
            </p>
          </div>

          <BookButtonSection pricingLink="/pricing/acnescars" showConsult={true}/>
        </div>
      </div>
    );
  }
}

export default AcneScarsIntro;
