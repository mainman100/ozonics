import React, { Component } from "react";
import classnames from "classnames";
import styles from "./SaltIntro.module.scss";
import BookButtonSection from '../../../common/BookButtonsSection';
import { saltIntro } from "./SaltIntroData";


class SaltIntro extends Component {

  render() {
    const data = saltIntro;
    let content= [];
    //console.log(data);
      content = data.map((x, index) => <p key={index} className="text-justify">{x}</p>);
    return (
      <div className={classnames("container", styles.sectionMain)}>      
        <div className={classnames("row", styles.mainRow)}>
          <div className={classnames(
              "col-12",
              "col-md-4", 
              styles.sectionIntroLeft
            )}>
            <img src="https://s3-us-west-2.amazonaws.com/ozonics-commercial/saltbooth-1-400x400.jpg" alt=""/>
            </div>
          <div
            className={classnames(
              "col-12",
              "col-md-8",
              styles.sectionIntroRight
            )}
          >
            <p className={classnames("m-0", "pb-4", styles.slogan)}>natural and holistic</p>            
            <p className={classnames("m-0", "p-1", styles.intro)}>
              {content}
            </p>
          </div>
          
        <BookButtonSection showConsult={false} />
        
        </div>
        
      </div>
    );
  }
}

export default SaltIntro;
