import React, { Component } from "react";
//import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap/dist/react-bootstrap";
import styles from "./Header.module.scss";
import classnames from "classnames";
import { logoutUser } from "../../actions/authActions";

class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    //this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Nav className="ml-auto">
        <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="/customer/dashboard">
            Your Account
          </NavDropdown.Item>
          <NavDropdown.Item>
            <a
              href=""
              onClick={this.onLogoutClick.bind(this)}
              
            >
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
      <Nav className="ml-auto">
        <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="/register">Create Account</NavDropdown.Item>
          <NavDropdown.Item href="/login">Customer Login</NavDropdown.Item>
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
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Aesthetics" id="basic-nav-dropdown">
                <NavDropdown.Item href="/aesthetics">Overview</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className={classnames(styles.aesthetics)}
                  href="/aesthetics/laserhair"
                >
                  Laser Hair Removal
                </NavDropdown.Item>
                <NavDropdown.Item
                  className={classnames(styles.aesthetics)}
                  href="/aesthetics/acnescars"
                >
                  Acne Scars
                </NavDropdown.Item>
                <NavDropdown.Item
                  className={classnames(styles.aesthetics)}
                  href="/aesthetics/botox"
                >
                  Botox
                </NavDropdown.Item>
                <NavDropdown.Item
                  className={classnames(styles.aesthetics)}
                  href="/aesthetics/ipl"
                >
                  IPL
                </NavDropdown.Item>
                <NavDropdown.Item
                  className={classnames(styles.aesthetics)}
                  href="/aesthetics/sculpsure"
                >
                  Sculpsure
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Health Zones" id="basic-nav-dropdown">
                <NavDropdown.Item href="/healthzones">
                  Overview
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className={classnames(styles.health)}
                  href="/healthzones/ozone"
                >
                  Ozone Sauna
                </NavDropdown.Item>
                <NavDropdown.Item
                  className={classnames(styles.health)}
                  href="/healthzones/infrared"
                >
                  Infrared Sauna
                </NavDropdown.Item>
                <NavDropdown.Item
                  className={classnames(styles.health)}
                  href="/healthzones/salt"
                >
                  Salt Therapy
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Text
              style={{ color: "yellow", textTransform: "uppercase" }}
              href="/location"
            >
              Lake Nona, Orlando
            </Navbar.Text>
          </Navbar.Collapse>
          {isAuthenticated ? (<Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Text
              style={{ textTransform: "capitalize " }}
            >
             welcome {user.name}
            </Navbar.Text>
          </Navbar.Collapse>) : null}
          
          <Navbar.Collapse id="basic-navbar-nav">
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
