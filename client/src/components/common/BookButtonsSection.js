import React, {Component} from "react";
import classnames from "classnames";
import styles from "./BookButtonsSection.module.scss";

class BookButtonsSection extends Component {
  render() {
  const link = this.props.pricingLink;
  console.log('showConsult:' + this.props.showConsult)
  let showConsult = this.props.showConsult;
  if (showConsult !== null) {
    showConsult = this.props.showConsult;
  } else {
    showConsult = true;
  }

  return (
    <div
      className={classnames(
        "flex-container mt-2 mb-2 w-100",
        styles.sectionMain
      )}
    >
      {showConsult ? (
        <a
          className={classnames("btn btn-info ml-2 mb-1", styles.btnBook)}
          href="/bookconsultation"
        >
          Free Consult
        </a>
      ) : null}

      <a
        className={classnames("btn btn-success ml-2 mb-1", styles.btnBook)}
        href="/bookappointment"
      >
        Book Appointment
      </a>

      <a
        className={classnames("btn btn-primary ml-2 mb-1", styles.btnBook)}
        href={link}
      >
        Pricing
      </a>
    </div>
  );
}
}

export default BookButtonsSection;
