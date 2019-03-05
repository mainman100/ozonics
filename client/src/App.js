import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./components/landing/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
