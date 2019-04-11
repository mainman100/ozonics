import React from "react";
import styles from "./Footer.module.scss";
import classnames from "classnames";

export default () => {
  return (
    <footer id="footer" className="mt-5 bg-dark text-white p-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h5 className={classnames(styles.headingLeft)}>RECENT NEWS</h5>

            <p className="text-justify">
              Ozonics' first Spa will be located in Lake Nona, Orlando, Florida.
            </p>
            <p className="text-justify">
              Indiegogo Crowdfunding campaign is due to start shortly, and we
              urge people in the Orlando area to participate. Excellent
              discounts are on offer for contributions to the cause. Help ensure
              that Ozone Therapy is readily available in your area.
            </p>
          </div>
          <div className={classnames("col-12 col-md-6", styles.footer)} >
            <h5>CONNECT</h5>
            <div className="p-1">
              <a className="fb-ic mr-3" role="button">
                <i class="fab fa-lg fa-facebook-f" />
              </a>

              <a className="tw-ic mr-3" role="button">
                <i class="fab fa-lg fa-twitter" />
              </a>
              <a class="ins-ic mr-3" role="button"><i class="fab fa-lg fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="row pt-1">
          <div className="col-12 text-center">
            Copyright &copy; {new Date().getFullYear()} Ozonics
          </div>
        </div>
      </div>
    </footer>
  );
};
