import React from "react";
import PropTypes from "prop-types";
import styles from "./CardFlip.module.scss";
import "./CardFlip.scss";
import classnames from "classnames";

export const BGCOLORS = {
  BLUE: '#1a0cdb',
  ORANGE: '#fe5619',
  LIGHTGREY: '#f8f8f8',
  DARKGREY: '#4d4949'
}

export const CardFlip = ({
  title,
  titleBack,
  subtitle,
  subtitleBack,
  text,
  textBack,
  footer,
  imgSRC,
  link,
  icon,
  showImage,
  showIcon,
  showTitle,
  showTitleBack,
  showSubtitle,
  showSubtitleBack,
  showFooter,
  bgColorFront,
  bgColorBack
}) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner card">
        <div style={ bgColorFront} className={classnames("flip-card-front")}>
          {showImage ? (
            <img src={imgSRC} className="card-img-top" alt={title} />
          ) : null}
          {showIcon ? (
            <div className={classnames("card-header", "text-center")}>
              <i className={icon} />
            </div>
          ) : null}
          {showTitle ? (
            <h4 className="card-title text-center mt-3">{title}</h4>
          ) : null}
          {showSubtitle ? (
            <h6
              className={classnames(
                "card-subtitle",
                "m-2",
                "text-center",
                styles.subTitle
              )}
            >
              {subtitle}
            </h6>
          ) : null}
          <p className={classnames("card-text", styles.cardText)}>{text}</p>
          <div className="card-footer"><p className="btn btn-warning w-100">turn over</p></div>
          
        </div>
        <div  style={ bgColorBack} className="flip-card-back">
        { showTitleBack ? <h4 className={classnames("text-center", "card-title", "mt-4")}>{titleBack}</h4> : null}
          { showSubtitleBack ?
          (<h6 className={classnames("text-center", "card-subtitle", "mt-2")}>
            {subtitleBack}
          </h6>) : null}
          <p className={classnames("card-text", "mt-2", styles.cardTextBack)}>
            {textBack}
          </p>
          <div className={classnames("card-footer", styles.footerBack)}><a href={link} className={classnames("btn btn-info", styles.btnInfo)}>more info</a><a href="/book" className={classnames("btn btn-primary ml-3", styles.btnBook)}>book</a></div>
        </div>
      </div>
    </div>
  );
};

CardFlip.propTypes = {
  title: PropTypes.string,
  titleBack: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleBack: PropTypes.string,
  text: PropTypes.string.isRequired,
  textBack: PropTypes.string.isRequired,
  footer: PropTypes.string,
  imgSRC: PropTypes.string,
  showImage: PropTypes.bool,
  showSubtitle: PropTypes.bool,
  showTitle: PropTypes.bool,
  showFooter: PropTypes.bool,
  showIcon: PropTypes.bool
};

CardFlip.defaultProps = {
  type: "text",
  showImage: false,
  showTitle: true,
  showTitleBack: true,
  showSubtitle: false,
  showSubtitleBack: false,
  showIcon: false,
  showFooter: false
};


