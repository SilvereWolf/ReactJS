import React, { Component } from 'react';
import './App.css';
import Home from "./pages/Home.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <route exact path="/Home" component={Home} />
      </div>
    );
  }
}

export default App;
