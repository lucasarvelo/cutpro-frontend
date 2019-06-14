import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Jobs from "./views/Jobs";
import CuttingList from "./views/CuttingList";
import Options from "./views/Options";
import About from "./views/About";
import JobEdit from "./views/JobEdit";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CuttingListProcess from "./views/CuttingListProcess";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container-fluid">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/cuttinglist" component={CuttingList} />
            <Route exact path="/options" component={Options} />
            <Route exact path="/about" component={About} />
            <Route path="/jobs/:id" component={JobEdit} />
            <Route path="/cuttinglist/:id" component={CuttingListProcess} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
