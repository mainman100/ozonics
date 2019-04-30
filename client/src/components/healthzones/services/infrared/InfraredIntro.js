import React, { Component } from "react";
import classnames from "classnames";
import styles from "./InfraredIntro.module.scss";
import BookButtonSection from '../../../common/BookButtonsSection';
import { infraredIntro } from "./InfraredIntroData";


class InfraredIntro extends Component {

  render() {
    const data = infraredIntro;
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
            <img src="https://s3-us-west-2.amazonaws.com/ozonics-commercial/infrared-1-400x400.jpg" alt=""/>
            </div>
          <div
            className={classnames(
              "col-12",
              "col-md-8",
              styles.sectionIntroRight
            )}
          >
            <p className={classnames("m-0", "pb-4", styles.slogan)}>shed your worries with your clothes</p>            
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

export default InfraredIntro;
