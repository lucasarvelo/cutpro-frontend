import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Jobs from "./views/Jobs";
import CutList from "./views/CutList";
import Options from "./views/Options";
import About from "./views/About";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/cutlist" component={CutList} />
            <Route exact path="/options" component={Options} />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
