import React from 'react';
import Navbar from '../components/ClientNavbar.jsx';
import Footer from '../components/Footer.jsx';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

firebase.initializeApp({
    apiKey:"AIzaSyBZLaF0k8XTkzwSvjCW2h9Bv3TRSpmYcMY",
    authDomain:"panicbutton-1525105633835.firebaseapp.com"
  })


export default class Login extends React.Component {
  state = {isSignedIn: false}
  uiConfig = {
    signInFlow: "popup",
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
    }}
    render() {
            return (
                <div>
                    <Navbar/>
            <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
                <Footer/>
        </div>
            );
          }
        }