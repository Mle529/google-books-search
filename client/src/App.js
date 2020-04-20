import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved/Saved";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path={["/", "/search"]} component={Search} />
          <Route exact path="/saved" component={Saved} />
        </div>
      </Router>
    );
  }
}

export default App;
