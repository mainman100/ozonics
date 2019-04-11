import React from "react";
import classnames from 'classnames';
import styles from './BookButtonsSection.module.scss';

const BookButtonsSection = (
  pricingLink
) => {
  const link = pricingLink.pricingLink;
  return (
    <div className={classnames("flex-container mt-2 mb-2 w-100", styles.sectionMain)}>
      
        <a className={classnames("btn btn-info ml-2 mb-1", styles.btnBook)} href="/bookconsultation">
            Free Consult
          </a>
          
          <a className={classnames("btn btn-success ml-2 mb-1", styles.btnBook)} href="/bookappointment">
            Book Appointment
          </a>
          
          <a className={classnames("btn btn-primary ml-2 mb-1", styles.btnBook)} href={link}>
            Pricing
          </a>
          
        
      </div>
    
  );
}

export default BookButtonsSection;
