import React, { Component } from 'react';
import firebase from "firebase"
import Navbar from '../components/ClientNavbar.jsx'; 
import Footer from '../components/Footer';



class Dashboard extends Component {

    state = {isSignedIn: false}
    uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: () => false
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
            <div>
            <Navbar/>
            <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            </span>
            <Footer/>
            </div>
        );
    }
}

export default Dashboard;
