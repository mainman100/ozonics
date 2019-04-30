import React, { Component } from "react";
//import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap/dist/react-bootstrap";
import styles from "./Header.module.scss";
import classnames from "classnames";
import { showServices } from "./HeaderData";

import { logoutUser } from "../../actions/authActions";

class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    //this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const services = showServices;

    const authLinks = (
      <Nav>
        <Navbar.Text
          style={{ textTransform: "capitalize", marginRight: "20px" }}
        >
          welcome {user.name}
        </Navbar.Text>

        <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="/customer/dashboard">
            Your Account
          </NavDropdown.Item>
          <NavDropdown.Item>
            <a href="" onClick={this.onLogoutClick.bind(this)}>
              <img
                className="rounded-circle"
                src={user.avatar}
                style={{ width: "25px", marginRight: "5px" }}
                alt={user.name}
                title="You must have a gravatar connected to your email to display an image"
              />{" "}
              Logout
            </a>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    );

    const guestLinks = (
      <Nav>
        <NavDropdown title="Account" id="basic-nav-dropdown">
          <div /* className={classnames(
              styles.accountDropdown
            )}  */
          >
            <NavDropdown.Item href="/register">Create Account</NavDropdown.Item>
            <NavDropdown.Item href="/login">Customer Login</NavDropdown.Item>
          </div>
        </NavDropdown>
      </Nav>
    );
    return (
      <div>
        <Navbar
          className={classnames(styles.mainNavbar)}
          bg="dark"
          fixed="top"
          expand="lg"
          variant="dark"
        >
          <Navbar.Brand variant="highlight" href="/">
            OZONICS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Aesthetics" id="basic-nav-dropdown">
                <NavDropdown.Item
                  className={classnames(styles.aestheticsOverview)}
                  href="/aesthetics"
                >
                  Overview
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {services.laserhair ? (
                  <NavDropdown.Item
                    className={classnames(styles.aesthetics)}
                    href="/aesthetics/laserhair"
                  >
                    Laser Hair Removal
                  </NavDropdown.Item>
                ) : null}
                {services.acnescars ? (
                  <NavDropdown.Item
                    className={classnames(styles.aesthetics)}
                    href="/aesthetics/acnescars"
                  >
                    Acne Scars
                  </NavDropdown.Item>
                ) : null}
                {services.botox ? (
                  <NavDropdown.Item
                    className={classnames(styles.aesthetics)}
                    href="/aesthetics/botox"
                  >
                    Botox
                  </NavDropdown.Item>
                ) : null}
                {services.ipl ? (
                  <NavDropdown.Item
                    className={classnames(styles.aesthetics)}
                    href="/aesthetics/ipl"
                  >
                    IPL
                  </NavDropdown.Item>
                ) : null}
                {services.sculpsure ? (
                  <NavDropdown.Item
                    className={classnames(styles.aesthetics)}
                    href="/aesthetics/sculpsure"
                  >
                    Sculpsure
                  </NavDropdown.Item>
                ) : null}
                {services.juvederm ? (
                  <NavDropdown.Item
                    className={classnames(styles.aesthetics)}
                    href="/aesthetics/juvederm"
                  >
                    Juvederm
                  </NavDropdown.Item>
                ) : null}
                {services.weightloss ? (
                  <NavDropdown.Item
                    className={classnames(styles.aesthetics)}
                    href="/aesthetics/weightloss"
                  >
                    Weight Loss
                  </NavDropdown.Item>
                ) : null}
                {services.skincare ? (
                  <NavDropdown.Item
                    className={classnames(styles.aesthetics)}
                    href="/aesthetics/skincare"
                  >
                    Skin Care
                  </NavDropdown.Item>
                ) : null}
              </NavDropdown>
              <NavDropdown title="Health Zones" id="basic-nav-dropdown">
                <NavDropdown.Item
                  className={classnames(styles.healthOverview)}
                  href="/healthzones"
                >
                  Overview
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {services.ozone ? (
                  <NavDropdown.Item
                    className={classnames(styles.health)}
                    href="/healthzones/ozone"
                  >
                    Ozone Sauna
                  </NavDropdown.Item>
                ) : null}
                {services.infrared ? (
                  <NavDropdown.Item
                    className={classnames(styles.health)}
                    href="/healthzones/infrared"
                  >
                    Infrared Sauna
                  </NavDropdown.Item>
                ) : null}
                {services.salt ? (
                  <NavDropdown.Item
                    className={classnames(styles.health)}
                    href="/healthzones/salt"
                  >
                    Salt Therapy
                  </NavDropdown.Item>
                ) : null}
                {services.cryotherapy ? (
                  <NavDropdown.Item
                    className={classnames(styles.health)}
                    href="/healthzones/cryotherapy"
                  >
                    Cryotherapy
                  </NavDropdown.Item>
                ) : null}
                {services.dripbar ? (
                  <NavDropdown.Item
                    className={classnames(styles.health)}
                    href="/healthzones/dripbar"
                  >
                    Drip Bar
                  </NavDropdown.Item>
                ) : null}
              </NavDropdown>

              <Nav.Link href="/location">Locations</Nav.Link>

              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse
            className="ml-auto justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
              <Nav.Link
                style={{
                  color: "yellow",
                  textTransform: "uppercase",
                  marginRight: "40px"
                }}
                href="/location"
              >
                Lake Nona, Orlando
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse
            className={classnames("justify-content-end ml-auto")}
            id="basic-navbar-nav"
          >
            {isAuthenticated ? authLinks : guestLinks}
            {/*  <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
          </Navbar.Collapse>
        </Navbar>
        ;
      </div>
    );
  }
}

Navbar.PropTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
