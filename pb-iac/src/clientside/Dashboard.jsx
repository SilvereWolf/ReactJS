import React, { Component } from 'react';
import firebase from "firebase"
import Footer from '../components/Footer';
import Card from '../components/Card';
import Navbar from '../components/AuthNavbar'




class Dashboard extends Component {

  signOut = (e) => {
    e.preventDefault();
    
    const {user} = this.props;
    user.signOut();
  }

    state = {isSignedIn: true}
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
      componentWillUnmount() {
        this.props.history.push('/Home');
      }
    
    render() {
        return (
            <div>
            <Navbar />
            <span>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            </span>
            <Card />
            <Footer/>
            </div>
        );
    }
}

export default Dashboard;
