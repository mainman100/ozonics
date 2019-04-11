import React, { Component } from "react";
import { connect } from "react-redux";
import SectionHeadingAesthetics from '../common/SectionHeadingAesthetics';

import { getPricing } from "../../actions/pricingActions";

class PricingLaserHair extends Component {
  constructor(props) {
    super(props);
   this.props.getPricing();
  }
  componentDidMount() {
   // this.props.getPricing();
  }

  render() {
   const { prices } = this.props.prices;
    let priceItems;

    if(prices === null) {
      priceItems = <h4>No prices found...</h4>;
    } 
    else {if (prices.length > 0 ) {
      priceItems = prices.map((price, index) => (
          <tr className="d-flex">
            <td className="col-6">{price['Hair Removal']}</td>
            <td className="col-3 text-right">${price['Per TX']}</td>
            <td className="col-3 text-right">${(price['Pkg Price'])}</td>
            {/* <td className="col-2 text-right">{price['Allocated Time']} min</td> */}
          </tr>
      ));
    } else {
      priceItems = <h4>No prices found...</h4>;
    }}
 
    return (
      
      
      <div className="container" style={{ marginTop: "32px" }}>
      <SectionHeadingAesthetics heading='laser hair fees'/>
        <table class="table table-striped table-bordered table-sm table-hover w-70">
        <thead>
          <tr className="d-flex">
            <th className="col-6" scope="col">Treatment</th>
            <th className="col-3 text-right" scope="col">Single</th>
            <th className="col-3 text-right" scope="col">Course of 6</th>
            {/* <th className="col-2 text-right" scope="col">Length</th> */}
          </tr>
        </thead>
        <tbody>
          {priceItems}
        </tbody>
        </table>
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  prices: state.prices
});

export default connect(
  mapStateToProps,
  { getPricing }
)(PricingLaserHair);

/* render() {
    const { profile, loading } = this.props.profile;

    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/profiles" className="btn btn-light mb-3 float-left">
                Back To Profiles
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
          <ProfileHeader profile={profile} />
          <ProfileAbout profile={profile} />
          <ProfileCreds
            education={profile.education}
            experience={profile.experience}
          />
          {profile.githubusername ? (
            <ProfileGithub username={profile.githubusername} />
          ) : null}
        </div>
      );
    }

    return (
      <div className="profile">
        <div className="row">
          <div className="container">
            <div className="col-md-12">{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.PropTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile); */
