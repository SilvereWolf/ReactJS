import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import RegForm from "./pages/RegForm.jsx";
import Launcher from "./pages/Launcher.jsx"
import fire from "./config/Fire.jsx";
import Dashboard from "./userboard/Dashboard.jsx";

class App extends Component {
 
  constructor(props){
    super(props);
    this.state ={
      user: {},
    }
  }

  componentDidMount(){
    this.authlistener();
  }

  authlistener(){
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if (user) {
        this.setState({user});
        //localStorage.setItem('user',user.uid);
      }else{
        this.setState({user:null});
        //localStorage.removeItem('user');
      }
    
    });
  }
  render() {
    return (
      <Router>
        <div>
          {this.state.user ? (<Dashboard/>) : (<Home/>)}
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
