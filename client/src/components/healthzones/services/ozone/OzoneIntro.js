import React, { Component } from "react";
import classnames from "classnames";
import styles from "./OzoneIntro.module.scss";
import BookButtonSection from '../../../common/BookButtonsSection';
import { ozoneIntro } from "./OzoneIntroData";


class OzoneIntro extends Component {

  render() {
    const data = ozoneIntro;
    let content= [];
    //console.log(data);
      content = data.map((x, index) => <p key={index} className="text-justify">{x}</p>);
    return (
      <div className={classnames("container", styles.sectionMain)}>      
        <div className="row">
          <div className={classnames(
              "col-12",
              "col-md-4",
              styles.sectionIntroLeft
            )}>
            <img src="https://s3-us-west-2.amazonaws.com/ozonics-commercial/ozone-3-400x400.jpg" alt=""/>
            </div>
          <div
            className={classnames(
              "col-12",
              "col-md-8",
              styles.sectionIntroRight
            )}
          >
            <p className={classnames("m-0", "pb-4", styles.slogan)}>health to the power of 03</p>            
            <p className={classnames("m-0", "p-1", styles.intro)}>
              {content}
            </p>
          </div>
          
        <BookButtonSection />
        
        </div>
        
      </div>
    );
  }
}

export default OzoneIntro;
