import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: 'AIzaSyBZLaF0k8XTkzwSvjCW2h9Bv3TRSpmYcMY',
  authDomain: "panicbutton-1525105633835.firebaseapp.com",
  databaseURL: "https://panicbutton-1525105633835.firebaseio.com",
  projectId: "panicbutton-1525105633835",
  storageBucket: "panicbutton-1525105633835.appspot.com",
  messagingSenderId: "152743131771",
};

const devConfig = {
  apiKey: 'AIzaSyBZLaF0k8XTkzwSvjCW2h9Bv3TRSpmYcMY',
  authDomain: "panicbutton-1525105633835.firebaseapp.com",
  databaseURL: "https://panicbutton-1525105633835.firebaseio.com",
  projectId: "panicbutton-1525105633835",
  storageBucket: "panicbutton-1525105633835.appspot.com",
  messagingSenderId: "152743131771",
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
