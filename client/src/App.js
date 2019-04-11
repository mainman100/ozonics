import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
// import { clearCurrentProfile } from "./actions/profileActions";

import { Provider } from "react-redux";
import store from "./store";

//import PrivateRoute from "./components/common/PrivateRoute";

import "./App.scss";
import Header from "./components/layout/Header";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import Landing from "./components/landing/Landing";
import Aesthetics from "./components/aesthetics/landing/Aesthetics";
import AcneScarsQA from "./components/aesthetics/services/acnescars/AcneScarsQA";
import LaserHair from "./components/aesthetics/services/laserhair/LaserHair";
import Healthzones from "./components/healthzones/landing/Healthzones";
import Ozone from "./components/healthzones/services/ozone/Ozone";
import AestheticsGrid from "./components/services/AestheticsGrid_db";

import PricingLaserHair from "./components/pricing/PricingLaserHair";
import Footer from "./components/layout/Footer";
import NotFound from "./components/not-found/NotFound";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// check for token.
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info.
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and isAuthenticated.
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token.
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user.
    store.dispatch(logoutUser());
    // TODO: clear current profile.
    // store.dispatch(clearCurrentProfile());
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Landing} />
            <div className="container-fluid p-0">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/aesthetics" component={Aesthetics} />
              <Route exact path="/aesthetics/grid" component={AestheticsGrid} />
              <Route exact path="/aesthetics/laserhair" component={LaserHair} />
              <Route exact path="/aesthetics/acnescars" component={AcneScarsQA} />
              <Route exact path="/healthzones" component={Healthzones} />
              <Route exact path="/healthzones/ozone" component={Ozone} />
              <Route exact path="/pricing/laserhair" component={PricingLaserHair} />
              <Route exact path="/not-found" component={NotFound} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
