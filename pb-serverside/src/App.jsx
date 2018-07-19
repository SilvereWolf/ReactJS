import React, { Component, } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Pages/Login.jsx';
import Meldingen from './Pages/Meldingen.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/Login" component={Login}/>
      <Route path="/Meldingen" component={Meldingen}/>
      </div>
      </Router>
    );
  }
}

export default App;
