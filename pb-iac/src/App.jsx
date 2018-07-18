import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Launcher from "./pages/Launcher.jsx"
import firebase from "firebase";
import Dashboard from "./clientside/Dashboard.jsx";
import Landing from "./pages/Landing.jsx";


class App extends Component {
  state = {isSignedIn: false}
  uiConfig = {
    signInFlow: "redirect",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        console.log('signInSuccessWithAuthResult', authResult, redirectUrl);
        this.props.history.push('/Dashboard');
        return false;
      }
    }
  }

  componentDidMount = () => {
    
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
        {this.state.isSignedIn ?(
          <Route path="/Dashboard" component={Dashboard}/>
        )
        :(
          <Route path="/Home" component={Home}/>
        )
        }
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Login" component={Login}/>
          <Route path="/Launcher" component={Launcher}/>
          <Route path="/Landing" component={Landing}/>
          
        </div>
      </Router>
    );
  }
}

export default App;
