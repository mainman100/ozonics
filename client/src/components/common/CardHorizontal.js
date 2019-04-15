import React from "react";
import PropTypes from "prop-types";
import styles from "./CardHorizontal.module.scss";
import classnames from "classnames";

const CardHorizontal = ({
  key,
  info,
  issue,
  treatment,
  imgSRC,
  link,
  showImage
}) => {
  return (
    <div className={classnames("card")}>
      <div className={classnames("row", "p-2")}>
        <div
          className={classnames(
            "col-12",
            "col-lg-2",
            "px-3",
            styles.issueColumn
          )}
        >
          <div
            className={
              ("card-block", "px-3", "align-self-center", styles.issue)
            }
          >
            <p className="card-text p-3 text-center ">for: <span style={{fontWeight: 'bold', wordWrap: 'break-word'}}>{issue} </span></p>
          </div>
        </div>
        <div
          className={classnames(
            "col-12",
            "col-lg-2",
            "px-3",
            styles.treatmentColumn
          )}
        >
          <div
            className={
              ("card-block", "px-3", "align-self-center", styles.treatment)
            }
          >
            <p className="card-text p-2 text-center ">{treatment} </p>
          </div>
        </div>
        <div
          className={classnames(
            "col-12",
            "col-lg-6",
            "px-3",
            styles.infoColumn
          )}
        >
          <div className={("card-block", "px-3", styles.info)}>
            <p className="card-text p-2 text-justify">{info} </p>
          </div>
        </div>

        <div
          className={classnames(
            "col-12",
            "col-lg-2",
            "m-0",
            "text-align: center",
            styles.imageColumn
          )}
        >
          <div className="row">
            <div className="col-12 pb-1">
              <a
                href={link}
                className={classnames(
                  "btn",
                  "btn-info",
                  "w-100",
                  "mx-0",

                  styles.infoBtn
                )}
              >
                more info
              </a>
            </div>
            <div className="col-12">
              <a
                href={link}
                className={classnames(
                  "btn",
                  "btn-success",
                  "w-100",

                  styles.bookBtn
                )}
              >
                BOOK
              </a>
              <a href="/book">
                {showImage ? <img src={imgSRC} className="w-100" /> : null}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardHorizontal.propTypes = {
  key: PropTypes.string.isRequired,
  issue: PropTypes.string,
  info: PropTypes.string,
  treatment: PropTypes.string.isRequired,
  imgSRC: PropTypes.string,
  showImage: PropTypes.bool
};

CardHorizontal.defaultProps = {
  type: "text",
  showImage: false
};

export default CardHorizontal;
