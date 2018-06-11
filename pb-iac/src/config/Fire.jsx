import firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBZLaF0k8XTkzwSvjCW2h9Bv3TRSpmYcMY",
    authDomain: "panicbutton-1525105633835.firebaseapp.com",
    databaseURL: "https://panicbutton-1525105633835.firebaseio.com",
    projectId: "panicbutton-1525105633835",
    storageBucket: "panicbutton-1525105633835.appspot.com",
    messagingSenderId: "152743131771"
  };
  const fire = firebase.initializeApp(config);
  export default fire;
