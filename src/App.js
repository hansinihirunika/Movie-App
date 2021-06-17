import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./assets/css/de.css";
import HomePage from "./components/pages/home";
import Header from "./components/header_components/header";
import Footer from "./components/footer_components/footer";
import PostPage from "./components/pages/post";
import MoviePage from "./components/pages/movie";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/PostPage" component={PostPage} />
          <Route exact path="/MoviePage" component={MoviePage} />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
