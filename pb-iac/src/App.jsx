import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import RegForm from "./pages/RegForm.jsx";
import Launcher from "./pages/Launcher.jsx"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/RegForm" component={RegForm}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Launcher" component={Launcher}/>
        </div>
      </Router>
    );
  }
}

export default App;
